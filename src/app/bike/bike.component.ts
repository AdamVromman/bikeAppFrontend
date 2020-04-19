import { Component, OnInit, Input } from '@angular/core';
import { Bike } from './bike.model';
import { Part } from '../part/part.model';
import { PartDataService } from '../part/part-data.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  
  private _fetchParts$: Observable<Part[]>
  @Input() public _bike : Bike;
  private _selectedPart: Part = new Part(null, new Array<number>(), "", "", null, "", new Array<string>(),new Array<string>());
  
  constructor(
    private _partsDataService: PartDataService
  ){}

  get fetchParts$(): Observable<Part[]>
  {
    return this._fetchParts$;
  }

  ngOnInit(): void {

    this._fetchParts$ = this._partsDataService.parts$.pipe
    (
      
    );

  }

  selectPart(part: Part)
  {
    this._selectedPart = part;
  }

  deselectPart()
  {
    this._selectedPart = new Part(null, new Array<number>(), "", "", null, "", new Array<string>(), new Array<string>());
  }

  get selectedPart(): Part
  {
    return this._selectedPart;
  }

}
