import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Bike } from '../bike/bike.model';
import { BikeDataService } from '../bike/bike-data.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  private _fetchBikes$: Observable<Bike[]>;
  private _errorMessage: string;
  public selectedBike: Bike = null;

  constructor(private _bikeDataService: BikeDataService)
   {
     
    }

   get bikes$(): Observable<Bike[]>
   {
     return this._fetchBikes$;
   }

   get errorMessage(): string
   {
      return this._errorMessage;
   }

  ngOnInit(): void {

    this._fetchBikes$ = this._bikeDataService.bikes$.pipe
    (
      catchError(err => 
        {
          this._errorMessage = err; 
          return EMPTY;
        })
    );


  }

  public kiesFiets(): string
  {
    if(this.selectedBike == null)
    {
      return "kies een fiets";
    }
    else{
      return this.selectedBike.name;
    }
  }

  public selectBike(bike: Bike)
  {
    this.selectedBike = bike;
  }

}
