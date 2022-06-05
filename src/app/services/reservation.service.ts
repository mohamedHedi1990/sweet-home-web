import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { HttpClient } from '@angular/common/http';
import { ReservationModel } from '../models/dto/request/reservation.model';
import { Observable } from 'rxjs';
import { ReservationDetailsResponseModel } from '../models/dto/response/ReservationDetailsResponse.model';
import { ReservationStatus } from '../enums/reservation-status';

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

  getReservationByAnnouncement(
    announcementId: number
  ): Observable<ReservationDetailsResponseModel[]> {
    return this.http.get<ReservationDetailsResponseModel[]>(
      `${this.RESERVATION_API}/by-announcement-id?announcementId=` +
        announcementId
    );
  }

  refuseReservation(id: number) {
    return this.http.put(
      `${this.RESERVATION_API}/refuse?reservationId=${id}`,
      null
    );
  }

  validateReservation(reservationId: number) {
    return this.http.put(
      `${this.RESERVATION_API}/validate?reservationId=${reservationId}`,
      null
    );
  }

  getMyReservations(): Observable<ReservationDetailsResponseModel[]> {
    return this.http.get<ReservationDetailsResponseModel[]>(
      `${this.RESERVATION_API}/user-reservation`
    );
  }

  cancelReservation(reservationId: number) {
    return this.http.put(
      `${this.RESERVATION_API}/cancel?reservationId=${reservationId}`,
      null
    );
  }

}
