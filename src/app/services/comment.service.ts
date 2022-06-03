import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnnouncementModel } from '../models/Announcement.model';

import { AnnouncementResponseModel } from '../models/dto/response/AnnouncementResponse.model';
import { SearchCriteriaModel } from '../models/searchCriteria.model';
import { MyAnnouncementResponseModel } from '../models/dto/response/MyAnnouncementResponse.model';
import {CommentDtoModel} from "../models/dto/CommentDto.model";

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  COMMENT_API = UtilsService.REMOTE_ADDRESS + '/api/comment';

  constructor(private http: HttpClient) {}

  commentAnnouncement(idAnnounce: number, comment: CommentDtoModel) {
    return this.http.post(`${this.COMMENT_API}/comment-announce?idAnnounce=`+idAnnounce, comment);
  }


}
