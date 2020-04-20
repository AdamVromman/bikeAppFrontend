import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Bike } from './bike.model';
import { Part } from '../part/part.model';
import { PartDataService } from '../part/part-data.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PartImageComponent } from '../part-image/part-image.component';



@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  
  private _fetchParts$: Observable<Part[]>
  @Input() public _bike : Bike;
  private _selectedPart: Part = new Part(null, new Array<number>(), "", "", null, "", new Array<string>(),new Array<string>());
  public imgSrc: String = "";
  @ViewChild('part') partImage: PartImageComponent;

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
    this.partImage.select;
   
  }

  bold()
  {
    this.imgSrc = "Selected";
  }

  deselectPart()
  {
    this.imgSrc = "";
  }

  get selectedPart(): Part
  {
    return this._selectedPart;
  }

}
