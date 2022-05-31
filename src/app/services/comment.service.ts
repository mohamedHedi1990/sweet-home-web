import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import {CommentDtoModel} from "../models/dto/CommentDto.model";

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  COMMENT_API = UtilsService.REMOTE_ADDRESS + '/api/comment';

  constructor(private http: HttpClient) {}

  commentAnnouncement(idAnnounce: number, comment: CommentDtoModel) {
    return this.http.post(
      `${this.COMMENT_API}/comment-announce?idAnnounce=` + idAnnounce,
      comment
    );
  }
}
