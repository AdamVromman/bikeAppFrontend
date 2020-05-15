import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Login, Gebruiker } from './gebruiker.model';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


function parseJwt(token) {
  if (!token) {
    return null;
  }
  const base64Token = token.split('.')[1];
  const base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  private readonly _tokenKey = 'currentUser';
  private _user$: BehaviorSubject<string>;
  public redirectUrl: string = null;
  public errorString: string;

  constructor(private http: HttpClient, private router: Router) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<string>(parsedToken && parsedToken.unique_name);
  }

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

  get token(): string {
    const localToken = localStorage.getItem(this._tokenKey);
    return !!localToken ? localToken : '';
  }
  
  login(email: string, password: string): Observable<boolean> {
    return this.http.post(
        `${environment.apiUrl}/account`,
        { email, password },
        { responseType: 'text' }
      )
      .pipe(
        catchError(this.handleError),
        map((token: any) => {
          console.log(this.errorString);
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            this._user$.next(email);
            console.log(this.errorString);
            return true;
          } else {
            console.log(this.errorString);
            return false;
          }
        })
      );
  }

  register(
    email: string,
    firstname: string,
    lastname: string,
    password: string
  ): Observable<boolean> {
    return this.http.post(
        `${environment.apiUrl}/account/register`,
        {
          firstname,
          lastname,
          email,
          password,
          passwordConfirmation: password,
        },
        { responseType: 'text' }
      )
      .pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            this._user$.next(email);
            return true;
          } else {
            
            return false;
          }
        })
      );
      
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem('currentUser');
      this._user$.next(null);
    }
    
  }

  checkUserNameAvailability = (email: string): Observable<boolean> => {
    return this.http.get<boolean>(
      `${environment.apiUrl}/account/checkusername`,
      {
        params: { email },
      }
    );
  };

  private handleError(error: any): Observable<never>
  {
    if (error instanceof HttpErrorResponse)
    {
      console.log(error.statusText);
      this.errorString = error.message;
    }
    return throwError(error.status);
  }
}
