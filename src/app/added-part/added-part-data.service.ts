import { Injectable } from '@angular/core';
import { AddedPart } from './addedPart.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError, tap } from 'rxjs/operators';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class AddedPartDataService {
  

  constructor(
    private http: HttpClient
  ) { }

  public get AddedParts$(): Observable<AddedPart[]>
  {
    return this.http.get(`${environment.apiUrl}/addedparts/`).pipe
    (
      catchError(this.handleError),
      map((list: any[]):AddedPart[] => list.map(AddedPart.fromJson))
    );
  }

  private handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = `an unknown error occurred ${err}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  public get images$(): Observable<Image[]>
  {
    
    let headers = new HttpHeaders().set('content-type', 'application/json');  
    return this.http.get(`${environment.apiUrl}/addedparts/images`, {headers}).pipe
    (
      catchError(this.handleError),
      map((list: any[]):Image[] => 
      {
        return list.map(Image.fromJSON);
      })
    );
  }

  public getImage(id: number): Observable<any[]>
  {
    return this.http.get(`${environment.apiUrl}/AddedParts/getImage/${id}`).pipe(
      catchError(this.handleError),
      map((image: any): any[] => 
      {
          if (image)
          {
          return image.imageData;
          }
          return null;
        
      })
    )
  }

}
