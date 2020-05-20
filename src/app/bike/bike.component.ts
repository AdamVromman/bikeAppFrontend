import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Bike } from './bike.model';
import { Part } from '../part/part.model';
import { PartDataService } from '../part/part-data.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PartImageComponent } from '../part-image/part-image.component';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  
  private _fetchParts$: Observable<Part[]>
  @Input() public _bike : Bike;
  private _selectedPart: Part = new Part(null, new Array<number>(), "", "", null, "", new Array<string>(),new Array<string>());
  public imgSrc: String = "Stuur";
  @ViewChildren(PartImageComponent) partImages: QueryList<PartImageComponent>;
  public locked: boolean = false;
  public icon: string = 'lock_open';

  constructor(
    private _partsDataService: PartDataService
  )
  {
    
  }

  get fetchParts$(): Observable<Part[]>
  {
    return this._fetchParts$;
  }

  ngOnInit(): void {

    this._fetchParts$ = this._partsDataService.parts$.pipe
    (
    );

  }

  selectPartHover(part: Part)
  {
    if(this.icon === 'lock_open')
    {
      this._selectedPart = part;
      this.partImages.find(p => p.part.name === part.name).selected = "Selected";
    }
   
   
  }

  selectPartClick(part: Part)
  {
    this._selectedPart = part;
    this.partImages.forEach(p => p.selected = "");
    this.partImages.find(p => p.part.name === part.name).selected = "Selected";
    this.icon = 'lock';
  }

  selectLock()
  {
    if (this.icon === 'lock')
    {
      this.icon = 'lock_open';
      this.partImages.forEach(p => p.selected = "");
    }
    else{
      this.icon = 'lock';
    }
  }


  deselectPart(part: Part)
  {
    
    if(this.icon === 'lock_open')
    {    
      this.partImages.find(p => p.part.name === part.name).selected = "";
    }
  }

  get selectedPart(): Part
  {
    return this._selectedPart;
  }

}
