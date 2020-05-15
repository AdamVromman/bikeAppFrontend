import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Part } from '../part/part.model';


@Component({
  selector: 'app-part-image',
  templateUrl: './part-image.component.html',
  styleUrls: ['./part-image.component.css']
})
export class PartImageComponent implements OnInit {

  @Output() public selectedPart = new EventEmitter<Part>();
  @Output() public deselectedPart = new EventEmitter<Part>();
  @Output() public selectedClickPart = new EventEmitter<Part>();
  @Input() public part: Part;
  public selected: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  public select()
  {
    this.selectedPart.emit(this.part);
  }

  public deselect()
  {
    
    this.deselectedPart.emit(this.part);
  }

  public selectClick()
  {
    this.selectedClickPart.emit(this.part);
  }

}
