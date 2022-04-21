import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';
import {CityModel} from "../models/city.model";

@Injectable({
  providedIn: 'root',
})
export class CityService {
  CITY_API = UtilsService.REMOTE_ADDRESS + '/api/city';
  constructor(private http: HttpClient) {}

  getCities(): Observable<any> {
    return this.http.get<any>(`${this.CITY_API}`);
  }

  getCitiesByCoutryId(coutryId: number): Observable<CityModel[]>{
    return this.http.get<CityModel[]>(`${this.CITY_API}/`+coutryId);
  }
}
