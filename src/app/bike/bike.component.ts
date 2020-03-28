import { Component, OnInit, Input } from '@angular/core';
import { Bike } from './bike.model';
import { Part } from '../part/part.model';



@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  @Input() public _bike : Bike;
  private _selectedPart: Part = new Part("", "", false, "", new Array<Part>());
  
  constructor(){}

  ngOnInit(): void {
  }

  selectPart(part: Part)
  {
    this._selectedPart = part;
  }

  deselectPart()
  {
    this._selectedPart = new Part("", "", false, "", new Array<Part>());
  }

  get selectedPart(): Part
  {
    return this._selectedPart;
  }

}
