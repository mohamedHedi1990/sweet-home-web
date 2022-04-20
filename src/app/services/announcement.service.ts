import { Injectable } from '@angular/core';
import {UtilsService} from "./utils.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AnnouncementModel} from "../models/Announcement.model";
import {AnnouncementResponse} from "../models/dto/response/AnnouncementResponse";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  ANNOUNCEMENT_API = UtilsService.REMOTE_ADDRESS + '/api/announcement';
  constructor(private http: HttpClient) { }

  getAllAnnouncement(): Observable<AnnouncementResponse[]>{
    return this.http.get<AnnouncementResponse[]>(`${this.ANNOUNCEMENT_API}/last-published`);
  }


}
