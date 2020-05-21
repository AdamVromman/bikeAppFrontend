import { Component, OnInit, Input } from '@angular/core';
import { Part } from '../part/part.model';
import { Subject, Observable, EMPTY, partition } from 'rxjs';
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
    private _fetchAddedParts$: AddedPart[];
    private _errorMessage: string;
    

  constructor(private _AddedPartDataService: AddedPartDataService) { 

  }

  get addedParts$(): AddedPart[]
  {
    return this._fetchAddedParts$;
  }

  get errorMessage(): string
  {
    return this._errorMessage
  }

  get optioneel(): string
  {
    if (this._part.isOptional)
    {
      return "ja";
    }
    return "neen";
  }

  ngOnInit(): void {

    this._AddedPartDataService.AddedParts$.pipe
    (
        catchError(err =>
          {
            this._errorMessage = err;
            return EMPTY;
          })
    ).subscribe(d => this._fetchAddedParts$ = d);
    


  }

}
