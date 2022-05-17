import {ReservationStatus} from "../enums/reservation-status";
import {AnnouncementModel} from "./Announcement.model";
import {LodgerModel} from "./lodger.model";

export class ReservationModel {

    reservationId:number;
    reservationStartDate: Date;
    reservationEndDate: Date;
    reservationGuestNumber: number;

    constructor(
      reservationId:number,
      reservationStartDate: Date,
      reservationEndDate: Date,
      reservationGuestNumber: number

    ) {
      this.reservationId = reservationId;
      this.reservationStartDate = reservationStartDate;
      this.reservationEndDate = reservationEndDate;
      this.reservationGuestNumber = reservationGuestNumber;

    }
  }
