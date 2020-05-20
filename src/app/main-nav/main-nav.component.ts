import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Gebruiker } from '../User/login/gebruiker.model';
import { LoginService } from '../User/login/login.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private _router: Router,
    private _route: ActivatedRoute) {
    _loginService.user$.subscribe(l => this.userName = l);
    }


  

  
  public logout()
  {
    this._loginService.logout();
    this._router.navigateByUrl('bikeApp/all');
    
  }

  public login()
  {
    console.log(this._route.url);
    this._router.navigateByUrl('bikeApp/login',{ queryParams: { redirectTo: this._route.snapshot.url }});
  }

  public register()
  {
    this._router.navigateByUrl('bikeApp/register');
  }

}
