import { Component, OnInit, Input } from '@angular/core';
import { Part } from '../part/part.model';
@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {

    @Input() public _part: Part;


  constructor() { 

    

  }

  ngOnInit(): void {
  }

}
