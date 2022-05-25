import { Component, OnInit } from '@angular/core';
import {ReservationDetailsResponseModel} from "../../../models/dto/response/ReservationDetailsResponse.model";
import {AnnouncementModel} from "../../../models/Announcement.model";
import {ReservationStatus} from "../../../enums/reservation-status";
import {ReservationService} from "../../../services/reservation.service";
import {AnnouncementStatus} from "../../../enums/announcement-status";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-reservation-user',
  templateUrl: './reservation-user.component.html',
  styleUrls: ['./reservation-user.component.scss']
})
export class ReservationUserComponent implements OnInit {
  page :number= 1;
  pageSize: number= 4;
  collectionSize:number = 0;
  reservationResponseModels: ReservationDetailsResponseModel[]=[];

  // @ts-ignore
  reservationToCancel: ReservationDetailsResponseModel;

  constructor(private reservationService:ReservationService,
              private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
   this.refreshReservations();
  }

  refreshReservations() {
    this.reservationService.getMyReservations().subscribe(res =>{
      this.collectionSize= res.length;
      this.reservationResponseModels = res
        .map((announcement, i) => ({id: i + 1, ...announcement}))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

      console.log("reservationResponseModels : ",this.reservationResponseModels)
    })
  }

  onShowAnnouncementDetails(announcement: AnnouncementModel) {
    window.open("/annoucement-details/"+announcement.announcementId);
  }

  getReservationStatusBadge(reservation: ReservationDetailsResponseModel): string {
    if(reservation.reservationStatus.toString() == 'ACCEPTED') {
      return 'badge-style-accepted';
    } else if(reservation.reservationStatus.toString() == 'PENDING'){
      return 'badge-style-pending';
    }else if(reservation.reservationStatus.toString() == 'REFUSED'){
      return 'badge-style-refused';
    }else if(reservation.reservationStatus.toString() == 'CANCELED'){
      return 'badge-style-canceled';
    }
    return '';
  }

  getReservationStatus(reservationStatus: ReservationStatus) {
    const status = reservationStatus.toString();
    return ReservationStatus[status as keyof typeof ReservationStatus];

  }

  onCancelReservation(cancelContent: any, reservation: ReservationDetailsResponseModel) {
    this.reservationToCancel= reservation;
    this.modalService.open(cancelContent, {centered :true});
  }

  onConfirmCancel() {
    this.reservationService.cancelReservation(this.reservationToCancel.reservationId).subscribe(res =>{
      this.toastr.success('La reservation de l\'annonce '+this.reservationToCancel.announcement.announcementTitle+ ' a été annulée avec succès', 'Succès');
      this.refreshReservations();
      this.modalService.dismissAll();
    },error => {
      this.toastr.error('Il y a un erreur lors l\'annulation de cette reservation !!', 'Erreur');

    })
  }
}
