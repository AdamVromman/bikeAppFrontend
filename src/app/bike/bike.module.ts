import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartComponent } from '../part/part.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BikeComponent } from './bike.component';
import { DependantPartComponent } from '../dependant-part/dependant-part.component';
import { BikeListComponent } from '../bike-list/bike-list.component';
import { AddedpartsFilterPipe } from '../added-part/addedparts-filter.pipe';
import { AddedPartComponent } from '../added-part/added-part.component';




@NgModule({
  declarations: [BikeListComponent, BikeComponent,PartComponent, DependantPartComponent, AddedpartsFilterPipe, AddedPartComponent],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [BikeListComponent]
})
export class BikeModule { }
