import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Gebruiker } from '../User/login/gebruiker.model';
import { LoginService } from '../User/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

 
  public userName: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver,
    private _loginService: LoginService,
    private _router: Router) {
      this.userName = _loginService.user$.value;
    }


  

  
  public logout()
  {
    this._loginService.logout();
    window.location.reload();
    this._router.navigateByUrl('bikeApp/all');
    
  }

}
