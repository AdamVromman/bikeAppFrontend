import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AddedPart } from '../added-part/addedPart.model';
import { Part } from '../part/part.model';
import { AddAddedPartService } from './add-added-part.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../User/login/login.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-add-added-part',
  templateUrl: './add-added-part.component.html',
  styleUrls: ['./add-added-part.component.css']
})
export class AddAddedPartComponent implements OnInit {

  
  @Input() public _Parts: Part[];
  @Input() part: Part;
  public addedPart: FormGroup;
  private fileToUpload: File = null;
  public disabled: boolean;
  public image: any;
  constructor(
    private _sanitizer: DomSanitizer,
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
      part:['', Validators.required],
      file:[]
    });
    this._loginService.user$.subscribe(v =>
      {
        if (v)
        {
          this.disabled = false;
        }
        else
        {
          this.disabled = true;
        }
      } )
  
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
    
    this._addAddedPartService.addAddedPart(new AddedPart
      (
        -1,
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
              this.uploadFile(l.Id);
            this._snackbar.open(`${l.getName} werd toegevoegd`, "oké", {duration: 2000});
            this.addedPart.reset();
            this.addedPart.markAsUntouched(); 
            }
        });
    
 
  }

  public selectFile(files: FileList)
  {
    this.fileToUpload = files.item(0);
  }

  uploadFile(addedPartId: number)
  {
    this._addAddedPartService.addImage(this.fileToUpload,addedPartId).subscribe();
  }

}
