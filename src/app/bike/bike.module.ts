import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartComponent } from '../part/part.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BikeComponent } from './bike.component';
import { BikeListComponent } from '../bike-list/bike-list.component';
import { AddedpartsFilterPipe } from '../added-part/addedparts-filter.pipe';
import { AddedPartComponent } from '../added-part/added-part.component';
import { AddAddedPartComponent } from '../add-added-part/add-added-part.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PartFilterPipe } from '../part/part-filter.pipe';
import { LoginComponent } from '../login/login.component';





@NgModule({
  declarations: [
    BikeListComponent, 
    BikeComponent,
    PartComponent, 
    AddedpartsFilterPipe, 
    AddedPartComponent, 
    AddAddedPartComponent, 
    PartFilterPipe, 
    LoginComponent],
  imports: [CommonModule, MaterialModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  exports: [BikeListComponent]
})
export class BikeModule { }
