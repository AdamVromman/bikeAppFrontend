import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private authService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.token.length) {
      const clonedRequest = req.clone({
        headers: req.headers.set('Authorization',`Bearer ${this.authService.token}`)
      });
      return next.handle(clonedRequest);
    }
    return next.handle(req);
  }
}