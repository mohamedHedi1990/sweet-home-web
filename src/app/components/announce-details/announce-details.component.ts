import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from 'src/app/services/announcement.service';
import {AnnouncementDetailsModel} from 'src/app/models/annoucementDetails.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressDtoModel} from 'src/app/models/dto/AddressDto.model';
import {CityDtoModel} from 'src/app/models/dto/CityDto.model';
import {CountryDtoModel} from 'src/app/models/dto/CountryDto.model';
import {UserDtoModel} from 'src/app/models/dto/UserDto.model';
import {ReservationModel} from 'src/app/models/reservation.model';
import {ReservationService} from 'src/app/services/reservation.service';
import {ToastrService} from 'ngx-toastr';
import {ReservationStatus} from "../../enums/reservation-status";
import {LodgerModel} from "../../models/lodger.model";
import {UserModel} from "../../models/user.model";
import {CommentDtoModel} from "../../models/dto/CommentDto.model";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-announce-details',
  templateUrl: './announce-details.component.html',
  styleUrls: ['./announce-details.component.scss'],
})
export class AnnounceDetailsComponent implements OnInit {
  isShowEssentiel = true;
  isShowDescript = true;

  reservation: ReservationModel = new ReservationModel(
    0,
    new Date(),
    new Date(),
    1
  );

  announcementDetails: AnnouncementDetailsModel = new AnnouncementDetailsModel(
    0,
    '',
    '',
    new Date(),
    '',
    false,
    '',
    '',
    '',
    new AddressDtoModel(
      '',
      0,
      new CityDtoModel(0, '', '', new CountryDtoModel(0, '', ''))
    ),
    0,
    0,
    0,
    0,
    0,
    new UserDtoModel('', '', new Date(),''),
    [],
    [],
    0,
    0,
    new Date(),
    new Date(),
    0,
    []
  );

  galerieWithoutFirstImg: string[] = [];
  idAnnounce: any;
  showAlertSuccess: boolean = false;
  message: string = '';

  comment: CommentDtoModel = new CommentDtoModel("", new UserDtoModel('', '', new Date(),''));

  photoNotFound: string = 'assets/images/agent/user.jpg';

  constructor(
    private announcementService: AnnouncementService,
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private toastr: ToastrService,
    private router: Router,
    private commentService:CommentService
  ) {}

  ngOnInit(): void {
    this.idAnnounce = this.route.snapshot.paramMap.get('id');
    this.getAnnoucementDetails(this.idAnnounce);

  }

  getAnnoucementDetails(id: number) {
    this.announcementService.getAnnouncementDetails(id).subscribe((res) => {
      this.announcementDetails = res;
      if(this.announcementDetails.announcementOwnerPublished.userPictureUrl == null)
        this.announcementDetails.announcementOwnerPublished.userPictureUrl=this.photoNotFound;

      this.announcementDetails.commentDtos.forEach(comment =>{
        if(comment.writer.userPictureUrl == null) comment.writer.userPictureUrl=this.photoNotFound;
      })
      console.log("announcementDetails : ",this.announcementDetails);

      let arrayGalerie = this.announcementDetails.announcementPictureUrls;
      this.galerieWithoutFirstImg = arrayGalerie.slice(1);
    });
  }

  toggleDisplay(block: any) {
    if (block === 'descript') {
      this.isShowDescript = !this.isShowDescript;
    } else {
      this.isShowEssentiel = !this.isShowEssentiel;
    }
  }
  onReserveSubmit() {
    const ifTokenExist: boolean =
      sessionStorage.getItem('token') !== null ? true : false;

    if (ifTokenExist) {
      this.bookReservation();
    } else {
      //announcementId=16
      this.router.navigateByUrl(`/login?announcementId=`+this.idAnnounce);
    }
  }

  bookReservation() {
    this.reservationService
      .bookReservation(this.idAnnounce, this.reservation)
      .subscribe(
        (response) => {
          this.showAlertSuccess = true;
          this.message = 'Votre reservation a été effectuée avec succées';
          this.showSuccess(this.message);
        },
        (error) => {
          console.log(
            "un erreur a été produit lors de l'actiond e la réservation ",
            error
          );
        }
      );
  }

  showSuccess(msg: string) {
    this.toastr.success('', msg);
  }

  onCommentSubmit() {
    this.commentService.commentAnnouncement(this.idAnnounce, this.comment).subscribe( res =>{
      this.comment.commentText="";
      this.showSuccess("Commentaire ajouté avec succès");
      this.getAnnoucementDetails((this.idAnnounce));
    }, error =>{
      console.log( "un erreur a été produit lors de l'ajout de commentaire ",
        error
      );
    })
  }

  isUserLoggedIn():boolean {
    if(sessionStorage.getItem("token"))  return true;
    return false;
  }
}
