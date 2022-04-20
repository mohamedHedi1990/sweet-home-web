import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnnouncementModel } from '../models/Announcement.model';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  ANNOUNCEMENT_API = UtilsService.REMOTE_ADDRESS + '/api/announcement';
  constructor(private http: HttpClient) {}

  getAllAnnouncement(): Observable<AnnouncementModel[]> {
    return this.http.get<AnnouncementModel[]>(
      `${this.ANNOUNCEMENT_API}/last-published`
    );
  }
}
