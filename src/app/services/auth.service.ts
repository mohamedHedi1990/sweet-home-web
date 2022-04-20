import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SKIP_AUTH_INTERCEPTOR_HEADER } from '../shared/constants/header';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_API = UtilsService.REMOTE_ADDRESS + '/api/auth';
  constructor(private http: HttpClient) {}
  signIn(payload: any): Observable<any> {
    return this.http.post<any>(`${this.AUTH_API}/signin`, payload, {
      headers: new HttpHeaders().set(
        SKIP_AUTH_INTERCEPTOR_HEADER.name,
        SKIP_AUTH_INTERCEPTOR_HEADER.value
      ),
    });
  }
}
