import {forwardRef, Injectable} from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      return next.handle(this.addAuthToken(req))

  }

  addAuthToken(request: HttpRequest<any>) {
    const token = localStorage.getItem('token');
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  }

}

