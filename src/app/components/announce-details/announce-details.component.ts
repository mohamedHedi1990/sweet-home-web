import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/services/announcement.service';
import {AnnouncementDetailsModel} from 'src/app/models/annoucementDetails.model';
import {EquipementAnouncementModel} from 'src/app/models/equipememntAnoucement.model';
import { ActivatedRoute, Router } from '@angular/router';

import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { AddressDtoModel } from 'src/app/models/dto/AddressDto.model';
import { CityDtoModel } from 'src/app/models/dto/CityDto.model';
import { CountryDtoModel } from 'src/app/models/dto/CountryDto.model';
import { UserDtoModel } from 'src/app/models/dto/UserDto.model';
import { ReservationModel } from 'src/app/models/reservation.model';
import { ReservationService } from 'src/app/services/reservation.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-announce-details',
  templateUrl: './announce-details.component.html',
  styleUrls: ['./announce-details.component.scss']
})
export class AnnounceDetailsComponent implements OnInit {
isShowEssentiel = true;
isShowDescript = true;

reservation: ReservationModel = new ReservationModel(
  new Date(),
  new Date(),
  1
);

announcementDetails : AnnouncementDetailsModel = new AnnouncementDetailsModel(0,"","",new Date(),"",false,"","","",new AddressDtoModel("",0,new CityDtoModel(0,"","",new CountryDtoModel(0,"", ""))),0,0,0,0,0,new UserDtoModel("", "", new Date()),[], [],0,0,new Date(),new Date, 0);


galerieWithoutFirstImg : string [] = []
idAnnounce : any
showAlertSuccess: boolean = false;
message: string = '';
ifTokenExist : boolean = false
  constructor(private announcementService: AnnouncementService,
              private route: ActivatedRoute,
              private reservationService : ReservationService,
              private toastr: ToastrService,
              private router : Router) { }

  ngOnInit(): void {
    this.ifTokenExist = localStorage.getItem('token') !== null ? true : false;
    console.log(this.ifTokenExist)
    this.idAnnounce = this.route.snapshot.paramMap.get('id');
   
    this.getAnnoucementDetails(this.idAnnounce);
  }

  getAnnoucementDetails(id : number){
     this.announcementService.getAnnouncementDetails(id).subscribe((res) => {
      this.announcementDetails = res;
      //console.log( this.announcementDetails)
      
      let arrayGalerie = this.announcementDetails.announcementPictureUrls
       this.galerieWithoutFirstImg  =  arrayGalerie.slice(1);
    
    });
    
  }


  toggleDisplay(block : any){

    if(block === 'descript'){
      this.isShowDescript = !this.isShowDescript;   
    }else{
      this.isShowEssentiel = !this.isShowEssentiel;  
    }

  }
  onReserveSubmit() {
    if(this.ifTokenExist){
      const reservation = new ReservationModel(
        this.reservation.reservationStartDate,
        this.reservation.reservationEndDate,
        this.reservation.reservationGuestNumber,
      );
      this.reserve(reservation);
    }else {
      this.router.navigateByUrl(`/login`);
    }
    
  }





  reserve(reservation : ReservationModel) {
    let params = "?announcementId="+this.idAnnounce
    console.log("send form")
   
      this.reservationService.reservation(params, reservation).subscribe(
        (response) => {
          this.showAlertSuccess = true;
          this.message = 'Votre reservation a été effectuée avec succées';
          this.showSuccess(this.message);
          this.router.navigateByUrl(`/home`);
        },
        (error) => {
          //this.showAlertError = true;
        }
      );
   
     
    
    
  }


  showSuccess(msg: string) {
    this.toastr.success('', msg);
  }
}
