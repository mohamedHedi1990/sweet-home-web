import {ReservationStatus} from "../../../enums/reservation-status";
import {UserDtoModel} from "../UserDto.model";

export class ReservationDetailsResponseModel {

  reservationId:number;

  reservationStartDate:Date;
  reservationEndDate:Date;

  reservationGuestNumber:number;
  reservationStatus:ReservationStatus ;

  userDto: UserDtoModel;



  constructor(reservationId:number,userFirstName: string, userLastName: string, reservationStartDate: Date, reservationEndDate: Date, reservationGuestNumber: number, reservationStatus: ReservationStatus, userPictureUrl: string,userDto: UserDtoModel) {
    this.reservationId = reservationId;
    this.reservationStartDate = reservationStartDate;
    this.reservationEndDate = reservationEndDate;
    this.reservationGuestNumber = reservationGuestNumber;
    this.reservationStatus = reservationStatus;
    this.userDto = userDto;
  }
}
