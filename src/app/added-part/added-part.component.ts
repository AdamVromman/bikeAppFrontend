import { Component, OnInit, Input } from '@angular/core';
import { AddedPart } from './addedPart.model';

@Component({
  selector: 'app-added-part',
  templateUrl: './added-part.component.html',
  styleUrls: ['./added-part.component.css']
})
export class AddedPartComponent implements OnInit {

  @Input() public _addedPart: AddedPart;

  constructor() { }

  ngOnInit(): void {
  }

}
