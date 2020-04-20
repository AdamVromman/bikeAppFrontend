import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddedPart } from '../added-part/addedPart.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddAddedPartService {

  constructor(
    private http: HttpClient
  ) { }

  public addAddedPart(addedPart: AddedPart): Observable<String>
  {
    
    console.log(addedPart);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<AddedPart>(`${environment.apiUrl}/AddedParts/`, addedPart, {headers: headers})
    .pipe(
      map((a :any):String => a.name)
    );
    
  }
}
