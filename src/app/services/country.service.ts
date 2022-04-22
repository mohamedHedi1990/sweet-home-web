import { Injectable } from '@angular/core';
import {UtilsService} from "./utils.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  COUNTRY_API = UtilsService.REMOTE_ADDRESS + '/api/country';
  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get<any>(`${this.COUNTRY_API}`);
  }


}
