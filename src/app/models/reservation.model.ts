export class ReservationModel {

    reservationStartDate: Date;
    reservationEndDate: Date;
    reservationGuestNumber: number;
  
    constructor(

      reservationStartDate: Date,
      reservationEndDate: Date,
      reservationGuestNumber: number,
       
    ) {

      this.reservationStartDate = reservationStartDate;
      this.reservationEndDate = reservationEndDate;
      this.reservationGuestNumber = reservationGuestNumber;

    }
  }