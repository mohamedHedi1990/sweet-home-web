import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { HttpClient } from '@angular/common/http';
import { ReservationModel } from '../models/reservation.model';
import {Observable} from "rxjs";
import {ReservationDetailsResponseModel} from "../models/dto/response/ReservationDetailsResponse.model";
import {ReservationStatus} from "../enums/reservation-status";

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  RESERVATION_API = UtilsService.REMOTE_ADDRESS + '/api/reservation';

  constructor(private http: HttpClient) {}

  bookReservation(announcementId: number, reservationModel: ReservationModel) {
    return this.http.post(
      `${this.RESERVATION_API}/book-reservation?announcementId=` +
        announcementId,
      reservationModel
    );
  }

  getReservationByAnnouncement(announcementId:number):Observable<ReservationDetailsResponseModel[]>{
    return this.http.get<ReservationDetailsResponseModel[]>(`${this.RESERVATION_API}/by-announcement-id?announcementId=`+announcementId);
  }

  deleteReservation(id:number) {
    return this.http.delete(`${this.RESERVATION_API}/`+id);
  }

  patchReservation(reservationId: number) {
    return this.http.get(`${this.RESERVATION_API}/validate/`+reservationId);

  }
}
