import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {EquipementService} from 'src/app/services/equipement.service';
import {EquipementAnouncementModel} from 'src/app/models/equipememntAnoucement.model';
import {CountryModel} from 'src/app/models/country.model';
import {CityModel} from 'src/app/models/city.model';
import {CountryService} from 'src/app/services/country.service';
import {CityService} from 'src/app/services/city.service';
import {AnnouncementRequestModel} from 'src/app/models/dto/request/AnnouncementRequest.model';
import {AddressRequestModel} from 'src/app/models/dto/request/AddressRequest.model';
import {CityDtoModel} from 'src/app/models/dto/CityDto.model';
import {CountryDtoModel} from 'src/app/models/dto/CountryDto.model';
import {AnnouncementService} from 'src/app/services/announcement.service';
import {ToastrService} from 'ngx-toastr';
import {FileService} from 'src/app/services/file.service';
import {AnnouncementType} from "../../../enums/announcement-type";
import {BedType} from "../../../enums/bed-type";
import {AnnouncementStatus} from "../../../enums/announcement-status";
import {MediaContext} from "../../../enums/media-context";
import {slideOut} from "ng-uikit-pro-standard";


@Component({
  selector: 'app-new-announcement',
  templateUrl: './new-announcement.component.html',
  styleUrls: ['./new-announcement.component.scss']
})
export class NewAnnoucementComponent implements OnInit, AfterViewInit{
 

  @Input() announcementId:number=0;
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
    0,
    '',
    '',
    'HOUSE',
    new AddressRequestModel(
        '', 
        0, 
        new CityDtoModel(
          0, 
          '',
          '',
          new CountryDtoModel(1, 'Tunisie', 'TN')
        )
    ),
      0,
      0,
      0,
      0,
      'SINGLE',
      false,
      '',
      '',
      0,
      0,
      new Date(),
      new Date(),
      0,
     []
  )

  imageUrls : string[] = [];
  pictures ?: FileList;
  //pictures: File[]=[];
  isStep2Disabled:boolean=true;
  isStep3Disabled:boolean=true;
  constructor(private equipementService : EquipementService,
              private countryService : CountryService,
              private cityService : CityService,
              private annoucementService : AnnouncementService,
              private toastr: ToastrService,
              private fileService: FileService
 ) { }

  ngOnInit(): void {

    this.getAllCountries();
    //this.annoucementRequest.announcementAddress.addressCity.country=this.countries[0];
    this.getEquipements();

    console.log("this.announcementId : ",this.announcementId)

      this.getAnnouncementIfExist();



  }

  getAnnouncementIfExist(){
    if(this.announcementId != 0) {
      this.annoucementService.getAnnouncementDetails(this.announcementId).subscribe(res => {
        console.log("AnnouncementDetails : ", res)
        this.annoucementRequest.announcementId = res.announcementId;
        this.annoucementRequest.announcementType = res.announcementType;
        this.annoucementRequest.announcementTitle = res.announcementTitle;
        this.annoucementRequest.announcementDescription = res.announcementDescription;
        this.annoucementRequest.announcementAddress = res.announcementAddress;
        if (res.announcementAddress != null) {
          if (res.announcementAddress.addressCity != null)
            this.annoucementRequest.announcementAddress.addressCity.country = res.announcementAddress.addressCity.country;
          this.annoucementRequest.announcementAddress.addressStreetNumber = res.announcementAddress.addressStreetNumber;
          this.annoucementRequest.announcementAddress.addressStreet = res.announcementAddress.addressStreet;
          this.annoucementRequest.announcementAddress.addressCity = res.announcementAddress.addressCity;
        }
        this.annoucementRequest.announcementSummary = res.announcementSummary;

        this.annoucementRequest.announcementBedType = res.announcementBedType;
        this.annoucementRequest.announcementRoomNumber = res.announcementRoomNumber;
        this.annoucementRequest.announcementBedNumber = res.announcementBedNumber;
        this.annoucementRequest.announcementBathRoomNumber = res.announcementBathRoomNumber;
        this.annoucementRequest.announcementCost = res.announcementCost;
        this.annoucementRequest.announcementMaxStay = res.announcementMaxStay;
        this.annoucementRequest.announcementMinStay = res.announcementMinStay;
        this.annoucementRequest.announcementEndAvailableDate = res.announcementEndAvailableDate;
        this.annoucementRequest.announcementFirstAvailableDate = res.announcementFirstAvailableDate;
        this.annoucementRequest.equipments = res.announcementEquipements;

        this.imageUrls = res.announcementPictureUrls;
        //this.pictures=res.announcementPictureUrls;
      })
    }
  }

  setStep() {
    //this.step = index;
  }

  nextStep1() {
    this.isStep2Disabled=false;
    //this.step++;
    this.step=1;
  }
  nextStep2() {
    this.isStep3Disabled=false;
   // this.step++;
    this.step=2;
  }

  prevStep() {
    this.step--;
  }

  compareCountry(c1: CountryModel, c2: CountryModel): boolean {
    if (c1 && c2) {
      return c1 && c2 ? c1.countryId === c2.countryId : c1 === c2;
    }
    return false;
  }
  compareCity(item: CityModel, selected: CityModel) {
    if (item && selected)
      return item && selected
        ? item.cityId === selected.cityId
        : item === selected;
    return false;
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
      //this.getCitiesByCoutryId(this.countries[0].countryId)
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


  onAnouncementUpdate(){
    if (this.annoucementRequest && this.announcementId!=0){
      this.updateAnnoucement();
    }
  }

  async updateAnnoucement() {
    let saveAnnoucement : any;
    saveAnnoucement = await this.annoucementService.updateAnnouncement(this.annoucementRequest);

    if (saveAnnoucement.announcementId) {

      this.uploadFilesWithContext(saveAnnoucement.announcementId)
    }
  }


  onUploadImages(event : any) {
    this.imageUrls=[];
    this.pictures=event.target.files;
    console.log("this.pictures first: ",this.pictures)
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imageUrls.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }

  }
 



  showSuccess(msg: string) {
    this.toastr.success('', msg);
  }


 remove_img(i : any){
     this.imageUrls.splice(i, 1)
 }

 uploadFilesWithContext(contextId : any){
  const formData = new FormData();
   if (this.pictures) {

     for (let i = 0; i <= this.pictures.length; i++) {
       console.log("pictures[i] : ",this.pictures[i])
       formData.append('contextId', contextId)
       formData.append('file', this.pictures[i]);

     }
     this.fileService.uploadFilesWithContext(MediaContext[3], formData).subscribe(
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
    /* if(this.showAlertSuccess){

     }*/

   }
 
 }

 ngAfterViewInit(){
    this.getAllCountries();
    this.getAnnouncementIfExist();
 }


}
