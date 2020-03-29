import { Injectable } from '@angular/core';
import { AddedPart } from './addedPart.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddedPartDataService {
  private _addedParts$: Observable<AddedPart[]>
  

  constructor(
    private http: HttpClient
  ) { }

  public get addedParts$(): Observable<AddedPart[]>
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
}
