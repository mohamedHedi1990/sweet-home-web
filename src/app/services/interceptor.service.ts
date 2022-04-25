import {forwardRef, Injectable} from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS,
} from '@angular/common/http';
//import {Observable} from "rxjs/Rx";
import {Router} from "@angular/router";
import {Observable} from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      return next.handle(this.addAuthToken(req))

  }

  addAuthToken(request: HttpRequest<any>) {
    const token = sessionStorage.getItem('token');

    return request.clone({
      setHeaders: {
        Authorization: `${token}`
      }
    })
  }

}

