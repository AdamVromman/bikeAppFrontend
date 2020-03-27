import { Component, OnInit, Input } from '@angular/core';
import { Part } from '../part/part.model';
@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {

    _part: Part;


  constructor() { 

    this._part = new Part("TEST", "Dit is een test");

  }

  ngOnInit(): void {
  }

}
