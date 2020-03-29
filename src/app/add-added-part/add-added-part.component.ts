import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { AddedPart } from '../added-part/addedPart.model';
import { Part } from '../part/part.model';
import { BikeDataService } from '../bike/bike-data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-added-part',
  templateUrl: './add-added-part.component.html',
  styleUrls: ['./add-added-part.component.css']
})
export class AddAddedPartComponent implements OnInit {

  public _Parts: Part[];
  @Input() part: Part;
  public addedPart: FormGroup;
  @Output() newAddedPart = new EventEmitter<AddedPart>();
  constructor(
    private _formBuilder: FormBuilder,
    private _BikeDataService: BikeDataService
  ) { }

  ngOnInit(): void {
    this.addedPart = this._formBuilder.group({
      name: [''],
      brand:[''],
      part:['']
    })
  
  }

  onSubmit()
  {
    this.newAddedPart.emit(new AddedPart(this.addedPart.value.name, "testBrand", 10.00, this.part));
  }

}
