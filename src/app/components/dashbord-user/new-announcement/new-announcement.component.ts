import { Component, OnInit, ViewChild } from '@angular/core';
import { EquipementService } from 'src/app/services/equipement.service';
import { EquipementAnouncementModel } from 'src/app/models/equipememntAnoucement.model';
import { CountryModel } from 'src/app/models/country.model';
import { CityModel } from 'src/app/models/city.model';
import { CountryService } from 'src/app/services/country.service';
import { CityService } from 'src/app/services/city.service';
import { AnnouncementRequestModel } from 'src/app/models/dto/request/AnnouncementRequest.model';
import { AddressRequestModel } from 'src/app/models/dto/request/AddressRequest.model';
import { CityDtoModel } from 'src/app/models/dto/CityDto.model';
import { CountryDtoModel } from 'src/app/models/dto/CountryDto.model';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-new-announcement',
  templateUrl: './new-announcement.component.html',
  styleUrls: ['./new-announcement.component.scss']
})
export class NewAnnoucementComponent implements OnInit {
 

  countries: CountryModel[] = [];
  cities: CityModel[] = [];

  selectedEquipements: any = [];
  step = 0;
  equipements : EquipementAnouncementModel []=[];

  listSelectedEquiements : Array <any>= []

  listCountry : Array<any>= [];
  showAlertSuccess: boolean = false;
  message: string = '';
  annoucementRequest : AnnouncementRequestModel = new AnnouncementRequestModel(
    '',
    '',
    '',
    new AddressRequestModel(
        '', 
        0, 
        new CityDtoModel(
          0, 
          '',
          '', 
          new CountryDtoModel(
            0,
            '',
            '')
        )
    ),
      0,
      0,
      0,
      0,
      '',
      false,
      '',
      '',
      0,
      0,
      new Date(),
      new Date(),
      0,
     [],
    
  )
  constructor(private equipementService : EquipementService,
              private countryService : CountryService,
              private cityService : CityService,
              private annoucementService : AnnouncementService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllCountries();
    this.getEquipements();
  }

  setStep() {
    //this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  getEquipements(){
    this.equipementService.getEquipements().subscribe(
      response => {
      
                    if(response!=undefined&&response!=null){
                    this.equipements=response   
                   
                    }
                   
    }, error => {
      console.log('error', error)
    });
  }

  getAllCountries() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data; 
      this.getCitiesByCoutryId(this.countries[0].countryId)
    });

    
  }
  getCitiesByCoutryId(countryId: number) {
    this.cityService.getCitiesByCoutryId(countryId).subscribe((res) => {
      this.cities = res;
    });
  }

  onChangeCountry(event: any) {
    this.getCitiesByCoutryId(event.countryId);
  }

  onAnouncementSubmit(){
    if (this.annoucementRequest){
      this.addAnnoucement(); 
    }
      
  }
  addAnnoucement(){
    this.annoucementService.addAnnouncement(this.annoucementRequest).subscribe(
      (response) => {
        this.showAlertSuccess = true;
        this.message = 'Votre annouce a été ajoutée avec succées';
        this.showSuccess(this.message);
     
        
      },
      (error) => {
        console.log(
          "un erreur a été produit lors de l'actiond e l'announcement ",
          error
        );
      }
    );
  }

  showSuccess(msg: string) {
    this.toastr.success('', msg);
  }

}
