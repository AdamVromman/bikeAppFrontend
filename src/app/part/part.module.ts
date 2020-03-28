import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartComponent } from './part.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BikeComponent } from '../bike/bike.component';
import { DependantPartComponent } from '../dependant-part/dependant-part.component';
import { BikeListComponent } from '../bike-list/bike-list.component';




@NgModule({
  declarations: [BikeListComponent, BikeComponent,PartComponent, DependantPartComponent],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [BikeListComponent]
})
export class PartModule { }
