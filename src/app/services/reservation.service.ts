import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { HttpClient } from '@angular/common/http';
import { ReservationModel } from '../models/reservation.model';

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
}
