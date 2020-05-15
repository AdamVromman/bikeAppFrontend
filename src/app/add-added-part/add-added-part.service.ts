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

  public addAddedPart(addedPart: AddedPart): Observable<AddedPart>
  {
    
    console.log(addedPart);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<AddedPart>(`${environment.apiUrl}/AddedParts/`, addedPart, {headers: headers})
    .pipe(
      map((a :any):AddedPart => 
      { 
        console.log(a);
        return AddedPart.fromJson(a);
      })
    );
    
  }

  public addImage(file: File, partId: number): Observable<string>
  {
      
      const formData = new FormData();
      formData.append('file', file, file.name);
      console.log(file);
      return this.http.post(`${environment.apiUrl}/AddedParts/addImage/${partId}`, formData).pipe(
        map((a: any): string => a)
      );
    
  }

  
}
