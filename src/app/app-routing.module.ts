import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { AuthGuard } from './User/auth.guard';
import { AddAddedPartComponent } from './add-added-part/add-added-part.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BikeComponent } from './bike/bike.component';


const routes: Routes = [
  {path: 'bikeApp/login', component: LoginComponent},
  {path:'bikeApp/register', component: RegisterComponent},
  {path:'bikeApp/all', component: BikeListComponent},
  {path:'bikeApp/bike/:name', component: BikeListComponent},
  {path: 'bikeApp/add',canActivate: [ AuthGuard ], component: AddAddedPartComponent },
  {path: '', redirectTo: 'bikeApp/all', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
