import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bike } from './bike/bike.model';
import { environment } from 'src/environments/environment';
import { tap, map } from 'rxjs/operators';

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
      tap(console.log),
      map((list: any[]): Bike[] => list.map(Bike.fromJSON) )
    );
  }
}

