import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { SKIP_AUTH_INTERCEPTOR_HEADER } from '../shared/constants/header';
import { UserRequestModel } from '../models/dto/request/UserRequest.model';
import { UserDetailsResponseModel } from '../models/dto/response/UserDetailsResponse.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  USER_API = UtilsService.REMOTE_ADDRESS + '/api/user';
  constructor(private http: HttpClient) {}

  signUp(userRequest: any): Observable<any> {
    return this.http.post<any>(`${this.USER_API}/add-new-user`, userRequest, {
      headers: new HttpHeaders().set(
        SKIP_AUTH_INTERCEPTOR_HEADER.name,
        SKIP_AUTH_INTERCEPTOR_HEADER.value
      ),
    });
  }

  verifyEmail(email: string) {
    return this.http.get<any>(`${this.USER_API}/verify?user_email=${email}`, {
      headers: new HttpHeaders().set(
        SKIP_AUTH_INTERCEPTOR_HEADER.name,
        SKIP_AUTH_INTERCEPTOR_HEADER.value
      ),
    });
  }

  saveUser(userRequestModel: UserRequestModel) {
    return this.http.post(`${this.USER_API}/add-new-user`, userRequestModel);
  }

  getUser(): Promise<UserDetailsResponseModel> {
    return this.http
      .get<UserDetailsResponseModel>(`${this.USER_API}/user-info`)
      .toPromise();
  }

  patchUser(userRequest: UserRequestModel) {
    return this.http.patch(`${this.USER_API}/update-user`, userRequest);
  }
}
