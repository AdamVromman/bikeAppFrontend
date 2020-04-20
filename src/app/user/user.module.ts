import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
    
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class UserModule { }
