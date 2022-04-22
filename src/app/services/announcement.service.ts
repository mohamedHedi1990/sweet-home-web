import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnnouncementModel } from '../models/Announcement.model';
import {AnnouncementResponseModel} from "../models/dto/response/AnnouncementResponse.model";

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
}
