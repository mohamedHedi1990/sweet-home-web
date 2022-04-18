import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  public static REMOTE_ADDRESS = environment.baseApiUrl;
  constructor() {}
}
