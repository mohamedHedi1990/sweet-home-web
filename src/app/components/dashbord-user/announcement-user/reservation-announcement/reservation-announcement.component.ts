import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ReservationStatus} from "../../../../enums/reservation-status";
import {ReservationService} from "../../../../services/reservation.service";
import {ReservationDetailsResponseModel} from "../../../../models/dto/response/ReservationDetailsResponse.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-reservation-announcement',
  templateUrl: './reservation-announcement.component.html',
  styleUrls: ['./reservation-announcement.component.css']
})
export class ReservationAnnouncementComponent implements OnInit{

  @Input() announcementId=0;
  reservations: ReservationDetailsResponseModel[]=[];

  // @ts-ignore
  reservationToDelete:ReservationDetailsResponseModel;


  // @ts-ignore
  reservationToValidate: ReservationDetailsResponseModel;

  page :number= 1;
  pageSize: number= 4;
  collectionSize:number = 0;
  photoNotFound: string = 'assets/images/agent/user.jpg';


  constructor(public activeModal: NgbActiveModal, private reservationService:ReservationService,
              private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.refreshReservations();
    console.log("reservations : ",this.reservations)
  }

  getReservationStatusBadge(reservation: ReservationDetailsResponseModel): string {
    if(reservation.reservationStatus.toString() == 'ACCEPTED') {
      return 'badge-style-accepted';
    } else if(reservation.reservationStatus.toString() == 'PENDING'){
      return 'badge-style-pending';
    }else if(reservation.reservationStatus.toString() == 'REFUSED'){
      return 'badge-style-refused'
    }
    return '';
  }

  getReservationStatus(reservationStatus: ReservationStatus) {
    const status = reservationStatus.toString();
    return ReservationStatus[status as keyof typeof ReservationStatus];
  }

  onValidateReservation(updateReservation:any,reservation: ReservationDetailsResponseModel) {
    this.reservationToValidate = reservation;
    this.modalService.open(updateReservation, {centered :true});
    
  }

  onConfirmValidate(){
    this.reservationService.patchReservation(this.reservationToValidate.reservationId).subscribe(res =>{
      this.toastr.success('La reservation de '+this.reservationToValidate.userFirstName+ ' ' +this.reservationToValidate.userLastName+' a été validé avec succès', 'Succès');
      this.refreshReservations();
      if(document.getElementById('closeModalUpdate') != null){
        document.getElementById('closeModalUpdate').click();
      }

      //this.activeModal.dismiss();
    },error => {
      this.toastr.error('Il y a un erreur lors la validation de la reservation de '+this.reservationToValidate.userFirstName+ ' ' +this.reservationToValidate.userLastName+'!!', 'Erreur');
    })
  }

  onRefuseReservation(deleteReservation:any,reservation: ReservationDetailsResponseModel) {
    this.reservationToDelete= reservation;
    this.modalService.open(deleteReservation, {centered :true});
  }

  onConfirmDelete() {
    this.reservationService.deleteReservation(this.reservationToDelete.reservationId).subscribe(res =>{
      this.toastr.success('La reservation de '+this.reservationToDelete.userFirstName+ ' ' +this.reservationToDelete.userLastName+' a été supprimée avec succès', 'Succès');
      this.refreshReservations();
      if(document.getElementById('closeModalDelete') != null){
        document.getElementById('closeModalDelete').click();
      }
     // this.activeModal.close();
    },error => {
      this.toastr.error('Il y a un erreur lors la suppression de la reservation de '+this.reservationToDelete.userFirstName+ ' ' +this.reservationToDelete.userLastName+'!!', 'Erreur');
    })
  }

  refreshReservations() {
    this.reservationService.getReservationByAnnouncement(this.announcementId).subscribe(res =>{
      this.collectionSize= res.length;
      this.reservations = res
        .map((reservation, i) => ({id: i + 1, ...reservation}))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

    })
  }

  isPending(reservationStatus: ReservationStatus):boolean{
    if(reservationStatus.toString() === 'ACCEPTED' || reservationStatus.toString() === 'REFUSED') return false;
    return true;
  }


}
