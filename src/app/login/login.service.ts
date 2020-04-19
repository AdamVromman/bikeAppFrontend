import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './gebruiker.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }


  public login(login: Login):Observable<string>
  {
    console.log(login);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<string>(`${environment.apiUrl}/Account/`, login, {headers:headers})
    .pipe();

  }
}
