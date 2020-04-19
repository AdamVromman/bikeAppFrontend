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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [
  {path: 'bikeApp/login', component: LoginComponent},
  {path:'bikeApp/all', component: BikeListComponent},
  {path: 'bikeApp/add', component: AddAddedPartComponent },
  {path: '', redirectTo: 'bikeApp/all', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainNavComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule, 
    BikeModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
