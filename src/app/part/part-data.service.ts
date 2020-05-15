import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Part } from './part.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartDataService {

  

  constructor(
    private http: HttpClient
  ) 
  { }

  public get parts$(): Observable<Part[]>
  {
    return this.http.get(`${environment.apiUrl}/parts/`).pipe
    (
      catchError(this.handleError),
      map((list: any[]): Part[] => list.map(Part.fromJSON) )
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

}


