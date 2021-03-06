import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeModule } from './bike/bike.module';
import { RouterModule, Routes } from '@angular/router';
import { AddAddedPartComponent } from './add-added-part/add-added-part.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './User/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './User/http-interceptor';
import { AuthGuard } from './User/auth.guard';
import { UserModule } from './User/user.module';
import { RegisterComponent } from './User/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainNavComponent,
    LoginComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule, 
    BikeModule,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    UserModule
   
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
