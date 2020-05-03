import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Login, Gebruiker } from './gebruiker.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logInForm: FormGroup;
  @Output() token = new EventEmitter<Gebruiker>();

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    this.logInForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit()
  {
    this._loginService.login(
      this.logInForm.value.email,
      this.logInForm.value.password
      ).subscribe(l =>
        {
          (val) => {
            if (val) {
              if (this._loginService.redirectUrl) {
                this.router.navigateByUrl(this._loginService.redirectUrl);
                this._loginService.redirectUrl = undefined;
                
                window.location.reload();
              } else {
                this.router.navigate(['/bikeApp/all']);
                window.location.reload();
                
      
              }
            } else {
              
            }
          }
        });
        
  }

}
