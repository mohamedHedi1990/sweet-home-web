import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
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
import { FileService } from 'src/app/services/file.service';


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

  imageUrls : any = []
 pictures : any = []
  constructor(private equipementService : EquipementService,
              private countryService : CountryService,
              private cityService : CityService,
              private annoucementService : AnnouncementService,
              private toastr: ToastrService,
              private fileService: FileService
 ) { }

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
 

  async addAnnoucement() {
    let saveAnnoucement : any
    saveAnnoucement = await this.annoucementService.addAnnouncement(this.annoucementRequest);

    if (saveAnnoucement.announcementId) {

     this.uploadFilesWithContext(saveAnnoucement.announcementId)
    }
  }



  showSuccess(msg: string) {
    this.toastr.success('', msg);
  }


 onUploadImages(event : any) {
  if (event.target.files && event.target.files[0]) {
    //this.pictures.push(event.target.files[0], event.target.files[1], event.target.files[2]);
    this.pictures.push(event.target.files);

    var filesAmount = event.target.files.length;
    for (let i = 0; i < filesAmount; i++) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrls.push(event.target.result);
        
      }
      reader.readAsDataURL(event.target.files[i]);
    }
  }
}



 remove_img(i : any){
     this.imageUrls.splice(i, 1)
 
 }

 uploadFilesWithContext(contextId : any){
  let context = "ANNOUNCEMENT"
  const formData = new FormData();
  for(let i =0; i<=this.pictures.length; i++){
    console.log(this.pictures[i])
    formData.append('file', this.pictures[i]);
    this.fileService.uploadFilesWithContext(context, contextId, formData).subscribe(
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
//formData.append('file', this.pictures[0]);
//formData.append('context', 'ANNOUNCEMENT');
 
 }

}
