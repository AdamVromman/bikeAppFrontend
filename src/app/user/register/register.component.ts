import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, ValidationErrors, ControlContainer } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { map, catchError } from 'rxjs/operators';

function comparePassword(control: AbstractControl): { [key: string]: any } {
  return control.get("password").value === control.get("passwordConfirm").value? null: {'passwordMismatch': 'Passwords dont match'}

}

function serverSideValidateUsername(checkAvailability: (username: string) => Observable<boolean>): ValidatorFn
{
  return (control: AbstractControl): Observable<ValidationErrors> =>
  {
    return checkAvailability(control.value).pipe
    (
      map(available =>
        {
          if(available)
          {
            return null;
          }
          return {userAlreadyExists: true}
        })
    )
  }
}

function PasswordRequierments():ValidatorFn
{
   return (control: AbstractControl): {[key: string]: any} =>
   {
    let reg = new RegExp('\w*[A-Z]\w*')
    if (reg.test(control.value))
    {
      return null
    }
    return {'passwordRequiermentsNotMet': 'The password must be at least 10 characters and contain at least 1 uppercase character'}
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public registerForm: FormGroup;
  public errorMessage: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email], serverSideValidateUsername(this._loginService.checkUserNameAvailability)],
      voornaam:['', Validators.required],
      achternaam:['', Validators.required],
      passwordGroup: this._formBuilder.group({password: ['', [Validators.required, Validators.minLength(10), PasswordRequierments()]],
      passwordConfirm:['', Validators.required]}, {comparePassword})
     
    })
    
  }

  public onSubmit()
  {
  
    this._loginService.register(
      this.registerForm.value.email,
      this.registerForm.value.voornaam,
      this.registerForm.value.achternaam,
      this.registerForm.value.passwordGroup.password
      ).pipe(
        catchError(err =>
          {
            
            this.errorMessage = err;
            return EMPTY;
          })
      ).subscribe(
          (val) => {
            if (val) {
              if (this._loginService.redirectUrl) {
                this.router.navigateByUrl(this._loginService.redirectUrl);
                this._loginService.redirectUrl = undefined;
               
              } else {
                this.router.navigate(['/bikeApp/all']);
                
              }
            } else {
            
            }
          }
        );
        
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
    else if (errors.userAlreadyExists)
    {
      return "email address already taken";
    }
    else if (errors.passwordMismatch)
    {
      return "the passwords do not match";
    }
    else if (errors.passwordRequiermentsNotMet)
    {
      return "Password must contain an uppercase character";
    }
    else if (errors.minlength)
    {
      return "password must be at least 10 characters";
    }
    

  }
}
