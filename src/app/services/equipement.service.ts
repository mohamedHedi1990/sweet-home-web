import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EquipementAnouncementModel } from '../models/equipememntAnoucement.model';


@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  EQUIPEMENT_API = UtilsService.REMOTE_ADDRESS + '/api/equipement';

  constructor(private http: HttpClient) { }

  getEquipements(): Observable<EquipementAnouncementModel[]> {
    return this.http.get<EquipementAnouncementModel[]>(`${this.EQUIPEMENT_API}`);
  }

}
