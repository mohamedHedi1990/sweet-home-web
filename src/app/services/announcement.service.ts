import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AnnouncementResponseModel} from "../models/dto/response/AnnouncementResponse.model";
import {SearchCriteriaModel} from "../models/searchCriteria.model";

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  ANNOUNCEMENT_API = UtilsService.REMOTE_ADDRESS + '/api/announcement';

  public rechercheform: SearchCriteriaModel= new SearchCriteriaModel(
    '',
    new Date(),
    new Date(),
    1
  );
  constructor(private http: HttpClient) {}

  getAllAnnouncement(): Observable<AnnouncementResponseModel[]> {
    return this.http.get<AnnouncementResponseModel[]>(
      `${this.ANNOUNCEMENT_API}/last-published`
    );
  }

  searchAnnouncements(rechercheform: SearchCriteriaModel):Observable<AnnouncementResponseModel[]> {
   /* let params = new HttpParams();
    params = params.append('announcementCityLabel', rechercheform.announcementCityLabel);
    params = params.append('announcementStartDate', rechercheform.announcementStartDate.toDateString());
    params = params.append('announcementEndDate', rechercheform.announcementEndDate.toDateString());
    params = params.append('nbGuest', rechercheform.nbGuest);*/
    return this.http.post<AnnouncementResponseModel[]>(`${this.ANNOUNCEMENT_API}/search`,rechercheform);
  }
}
