import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bike } from '../bike/bike.model';
import { BikeDataService } from '../bike-data.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  private _fetchBikes$: Observable<Bike[]> = this._bikeDataService.bikes$;

  constructor(private _bikeDataService: BikeDataService)
   { }

   get bikes$(): Observable<Bike[]>
   {
     return this._fetchBikes$;
   }

  ngOnInit(): void {
  }

}
