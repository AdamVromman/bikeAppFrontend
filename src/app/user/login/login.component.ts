import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Login, Gebruiker } from './gebruiker.model';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logInForm: FormGroup;
  @Output() token = new EventEmitter<Gebruiker>();
  public errorString: string;
  public vorigePagina: string;
  public errorMessage: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
    
  ) {
      
   }

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
      ).pipe(
        catchError(err =>
          {
            
            this.errorMessage = err; 
            return EMPTY;
          })
      ).subscribe(val =>
        {
          
            if (val) {
              if (this._loginService.redirectUrl) {
                this.router.navigateByUrl(this._loginService.redirectUrl);
                this._loginService.redirectUrl = undefined;
              } else {
      
                  this.router.navigateByUrl('/bikeApp/all');
                
              }
            } else {
              
            }
        this.errorString = this._loginService.errorString;
        });

       
        
  }

  getErrorMessage(errors: any):string
  {
    if (errors.required)
    {
      return "is required";
    }
    else if (errors.email)
    {
      return "needs to be a valid emailaddress";
    }
  }

}
