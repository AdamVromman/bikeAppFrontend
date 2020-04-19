import { Component, OnInit, Input } from '@angular/core';
import { Part } from '../part/part.model';
import { Subject, Observable, EMPTY } from 'rxjs';
import { AddedPart } from '../added-part/addedPart.model';
import { AddedPartDataService } from '../added-part/added-part-data.service';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {

    @Input() public _part: Part;
    public PartName: string;
    public filterAddedParts$ = new Subject<string>();
    private _fetchAddedParts$: Observable<AddedPart[]>;
    private _errorMessage: string;
    

  constructor(private _AddedPartDataService: AddedPartDataService) { 

    this.filterAddedParts$.subscribe(
      val => this.PartName = val);

  }

  get addedParts$(): Observable<AddedPart[]>
  {
    return this._fetchAddedParts$;
  }

  get errorMessage(): string
  {
    return this._errorMessage
  }
  ngOnInit(): void {

    this._fetchAddedParts$ = this._AddedPartDataService.addedParts$.pipe
    (
        catchError(err =>
          {
            this._errorMessage = err;
            return EMPTY;
          })
    );


  }

}
