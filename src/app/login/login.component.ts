import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Login } from './gebruiker.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logInForm: FormGroup;
  @Output() token: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService
    
  ) { }

  ngOnInit(): void {
    this.logInForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit()
  {
    this._loginService.login(new Login(
      this.logInForm.value.email,
      this.logInForm.value.password
      )).subscribe(l => this.token = l);
  }

}
