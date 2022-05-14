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
    1,
    ReservationStatus.PENDING,
    new LodgerModel('', '', '', '', '', '', 'LODGER')
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
    new UserDtoModel('', '', new Date()),
    [],
    [],
    0,
    0,
    new Date(),
    new Date(),
    0
  );

  galerieWithoutFirstImg: string[] = [];
  idAnnounce: any;
  showAlertSuccess: boolean = false;
  message: string = '';
  constructor(
    private announcementService: AnnouncementService,
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idAnnounce = this.route.snapshot.paramMap.get('id');
    this.getAnnoucementDetails(this.idAnnounce);
  }

  getAnnoucementDetails(id: number) {
    this.announcementService.getAnnouncementDetails(id).subscribe((res) => {
      this.announcementDetails = res;

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
      localStorage.getItem('token') !== null ? true : false;

    if (ifTokenExist) {
      this.bookReservation();
    } else {
      this.router.navigateByUrl(`/login`);
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
}
