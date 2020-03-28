import { Component, OnInit, Input } from '@angular/core';
import { Part } from '../part/part.model';

@Component({
  selector: 'app-dependant-part',
  templateUrl: './dependant-part.component.html',
  styleUrls: ['./dependant-part.component.css']
})
export class DependantPartComponent implements OnInit {

  @Input() public _part: Part;

  constructor() { }

  ngOnInit(): void {
  }

}
