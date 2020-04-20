import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';

const modules: Array<any>  = [
  CommonModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatChipsModule,
  MatToolbarModule,
    
  ];

@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules]
})
export class MaterialModule { }
