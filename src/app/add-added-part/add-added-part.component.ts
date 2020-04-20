import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AddedPart } from '../added-part/addedPart.model';
import { Part } from '../part/part.model';
import { AddAddedPartService } from './add-added-part.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../User/login/login.service';

@Component({
  selector: 'app-add-added-part',
  templateUrl: './add-added-part.component.html',
  styleUrls: ['./add-added-part.component.css']
})
export class AddAddedPartComponent implements OnInit {

  
  @Input() public _Parts: Part[];
  @Input() part: Part;
  public addedPart: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _addAddedPartService: AddAddedPartService,
    private _snackbar: MatSnackBar,
    private _loginService: LoginService
  ) { }

  get parts(): Part[]
  {
    return this._Parts
  }

  ngOnInit(): void {
    this.addedPart = this._formBuilder.group({
      name: ['', Validators.required],
      brand:['onbekend'],
      price:['', Validators.required],
      link:['', Validators.required],
      part:['', Validators.required]
    });
  
  }


  getErrorMessage(errors: any):string
  {
    if (errors.required)
    {
      return "is required";
    }
    else if (errors.email)
    {
      return "needs to be a valid emailaddress";
    }

  }
  

  onSubmit()
  {
    
    console.log(this._loginService.user$.value);
    this._addAddedPartService.addAddedPart(new AddedPart
      (
        this.addedPart.value.name, 
        this.addedPart.value.brand, 
        this.addedPart.value.price, 
        this.addedPart.value.part, 
        this._loginService.user$.value, 
        this.addedPart.value.link
      )).subscribe(l => 
        {
          if (this.addedPart.valid)
            {
            this._snackbar.open(`${l} werd toegevoegd`, "oké", {duration: 2000});
            this.addedPart.reset();
            }
        });
      
      
      
      
      
  }

}
