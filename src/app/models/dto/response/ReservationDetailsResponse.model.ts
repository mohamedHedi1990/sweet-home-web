import {ReservationStatus} from "../../../enums/reservation-status";

export class ReservationDetailsResponseModel {

  reservationId:number;
  userFirstName:string;
  userLastName:string;

  reservationStartDate:Date;
  reservationEndDate:Date;

  reservationGuestNumber:number;
  reservationStatus:ReservationStatus ;

  userPictureUrl:string;


  constructor(reservationId:number,userFirstName: string, userLastName: string, reservationStartDate: Date, reservationEndDate: Date, reservationGuestNumber: number, reservationStatus: ReservationStatus, userPictureUrl: string) {
    this.reservationId = reservationId;
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
    this.reservationStartDate = reservationStartDate;
    this.reservationEndDate = reservationEndDate;
    this.reservationGuestNumber = reservationGuestNumber;
    this.reservationStatus = reservationStatus;
    this.userPictureUrl = userPictureUrl;
  }
}
