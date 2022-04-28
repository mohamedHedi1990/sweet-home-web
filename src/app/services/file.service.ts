import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  FILE_API = UtilsService.REMOTE_ADDRESS + '/api/file';
  constructor(private http: HttpClient) {}

  uploadLogoFile(context: string, params : FormData){
    return this.http.post(`${this.FILE_API}/post-media/`+context, params);
  }

  deleteUserPhoto(){
    return this.http.get(`${this.FILE_API}/delete-user-photo`);
  }
}
