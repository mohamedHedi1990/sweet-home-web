import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnnouncementModel } from '../models/Announcement.model';
import {AnnouncementResponseModel} from "../models/dto/response/AnnouncementResponse.model";
import { AnnouncementDetailsModel } from '../models/annoucementDetails.model';
import { AnnouncementResponseModel } from '../models/dto/response/AnnouncementResponse.model';
import { SearchCriteriaModel } from '../models/searchCriteria.model';
import {MyAnnouncementResponseModel} from "../models/dto/response/MyAnnouncementResponse.model";

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  ANNOUNCEMENT_API = UtilsService.REMOTE_ADDRESS + '/api/announcement';

  constructor(private http: HttpClient) {}

  getAllAnnouncement(): Observable<AnnouncementResponseModel[]> {
    return this.http.get<AnnouncementResponseModel[]>(
      `${this.ANNOUNCEMENT_API}/last-published`
    );
  }


  getAnnouncementDetails(annoucementId: number): Observable<AnnouncementDetailsModel> {
    return this.http.get<AnnouncementDetailsModel>(
      `${this.ANNOUNCEMENT_API}/details/`+annoucementId
);
  }
  searchAnnouncements(
    rechercheform: SearchCriteriaModel
  ): Observable<AnnouncementResponseModel[]> {
    /* let params = new HttpParams();
    params = params.append('announcementCityLabel', rechercheform.announcementCityLabel);
    params = params.append('announcementStartDate', rechercheform.announcementStartDate.toDateString());
    params = params.append('announcementEndDate', rechercheform.announcementEndDate.toDateString());
    params = params.append('nbGuest', rechercheform.nbGuest);*/
    return this.http.post<AnnouncementResponseModel[]>(
      `${this.ANNOUNCEMENT_API}/search`,
      rechercheform
    );
  }

  myAnnouncements(): Observable<MyAnnouncementResponseModel[]>{
    return this.http.get<MyAnnouncementResponseModel[]>(`${this.ANNOUNCEMENT_API}/my-announcements`);
  }

  deleteAnnouncement(announcementId: number) {
    return this.http.delete(`${this.ANNOUNCEMENT_API}/`+announcementId)
  }
}
