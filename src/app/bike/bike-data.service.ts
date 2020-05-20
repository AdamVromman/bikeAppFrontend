import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Bike } from './bike.model';
import { environment } from 'src/environments/environment';
import { tap, map, catchError, delay, debounce, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BikeDataService {
  private _bikes$: Observable<Bike[]>;

  constructor(
    private http: HttpClient
  ) { }

  public get bikes$(): Observable<Bike[]>
  {
    return this.http.get(`${environment.apiUrl}/bikes/`).pipe(
      catchError(this.handleError),
      map((list: any[]): Bike[] => list.map(Bike.fromJSON) )
    );
  }

  public getBike$(name: string): Observable<Bike>
  {
    return this.http.get(`${environment.apiUrl}/bikes/${name}`).pipe(
      map((bike:any): Bike => Bike.fromJSON(bike))
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

