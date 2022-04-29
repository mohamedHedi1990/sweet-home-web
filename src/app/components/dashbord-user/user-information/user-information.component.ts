import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../../models/user.model";
import {CountryModel} from "../../../models/country.model";
import {CityModel} from "../../../models/city.model";
import {CityService} from "../../../services/city.service";
import {CountryService} from "../../../services/country.service";
import {UserRequestModel} from "../../../models/dto/request/UserRequest.model";
import {Provider} from "../../../enums/Provider";
import {RoleCode} from "../../../enums/role-code";
import {AddressRequestModel} from "../../../models/dto/request/AddressRequest.model";
import {CityDtoModel} from "../../../models/dto/CityDto.model";
import {CountryDtoModel} from "../../../models/dto/CountryDto.model";
import {UserService} from "../../../services/user.service";
import {UserDetailsResponseModel} from "../../../models/dto/response/UserDetailsResponse.model";
import {AddressDtoModel} from "../../../models/dto/AddressDto.model";
import {ToastrService} from "ngx-toastr";
import {FileService} from "../../../services/file.service";
import {MediaContext} from "../../../enums/media-context";

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {

  countries: CountryModel[]= [];
  cities : CityModel[]=[]
  // @ts-ignore
  @Input() user:UserModel=new UserModel();

  userRequest : UserRequestModel=new UserRequestModel(this.user.userEmail,this.user.userPassword, this.user.userLogin,
    this.user.userFirstName, this.user.userLastName, new Date(),
    new AddressRequestModel("",0,
      new CityDtoModel(0,"","",
        new CountryDtoModel(1,"Tunisie","TN"))),
    Provider.LOCAL, RoleCode.ADMINISTRATOR);


  userDetailsResponseModel: UserDetailsResponseModel=new UserDetailsResponseModel("","",
    new Date(),"","",new Date(),new AddressDtoModel("",
      0,new CityDtoModel(0,"","",new CountryDtoModel(1,
        "Tunisie","TN"))),RoleCode.OWNER,"");


  constructor(private cityService:CityService, private countryService:CountryService,
              private userService:UserService, private toastr: ToastrService, private fileService:FileService) {

  }

  photoNotFound:string='assets/images/agent/user.jpg';

  ngOnInit(): void {

    this.getAllCountries();

    this.getCurrentUser();


  }

  getCurrentUser(){
    this.userService.getUser().subscribe((res) =>{

      console.log("res : ",res)

      this.userDetailsResponseModel = res;
      if(this.userDetailsResponseModel.userAddress == null){
        this.userDetailsResponseModel.userAddress = new AddressDtoModel("",
          0,new CityDtoModel(0,"","",new CountryDtoModel(1,
            "Tunisie","TN")));
      }
      if(this.userDetailsResponseModel.userAddress.addressCity == null){
        this.userDetailsResponseModel.userAddress.addressCity = new CityDtoModel(0,"","",new CountryDtoModel(1,
          "Tunisie","TN"))
      }
      if(this.userDetailsResponseModel.userPictureUrl == null){
        this.userDetailsResponseModel.userPictureUrl = this.photoNotFound;
      }

      this.getCitiesByCoutryId();

    })
  }

  async onSelectFile(event: any) {
    if (event.target.files && event.target.files[0] && ((event.target.files[0].size)/1024/1024<=1)) {

      const img = new Image();
      img.src = window.URL.createObjectURL( event.target.files[0] );
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (e) => { // called once readAsDataURL is completed
        const width = img.naturalWidth;
        const height = img.naturalHeight;

        window.URL.revokeObjectURL( img.src );
        const heightMarge = (height * 30) / 100;
        const widthMarge = (width * 30) / 100;
        if ((width >= (height - heightMarge)) && (width <= (height + heightMarge)) || (height >= (width - widthMarge)) && (height <= (width + widthMarge))) {
          if (e.target) {
            //this.userDetailsResponseModel.userPictureUrl = event.target.files[0];
            const formData = new FormData();
            formData.append('file', event.target.files[0]);

            this.fileService.uploadLogoFile(MediaContext[1], formData).subscribe(res =>{
              this.getCurrentUser();
            })

            //this.reloadComponent();
          }
        } else {
          //this.showAlertError = true;
          //this.message = "Das ausgewählte Bild muss quadratisch sein";
        }
      };

    }
  }

  deletePhoto(){

    if(this.userDetailsResponseModel.userPictureUrl===this.photoNotFound){
      this.toastr.info('La photo est déjà vide','Information');
    }else {
      this.fileService.deleteUserPhoto().subscribe(res =>{
        this.toastr.success('La photo a été supprimée avec succès','Succès');
        this.userDetailsResponseModel.userPictureUrl=this.photoNotFound;
      })
    }

  }

  compareCountry(c1: CountryModel, c2: CountryModel): boolean {
    if(c1 && c2){
      return c1 && c2 ? c1.countryId === c2.countryId : c1 === c2;
    }
    return false;

  }
  compareCity(item:CityModel, selected:CityModel) {
    if(item && selected)
      return item && selected ? item.cityId === selected.cityId : item === selected;
    return false;
  }


  getCitiesByCoutryId(){
    if(this.userDetailsResponseModel.userAddress)
      this.cityService.getCitiesByCoutryId(this.userDetailsResponseModel.userAddress.addressCity.country.countryId).subscribe((res) =>{
        this.cities = res;
      })
  }

  getAllCountries(){
    this.countryService.getCountries().subscribe((data) =>{
      this.countries = data;
    })
  }

  onFormSubmit() {

    this.userRequest.userAddress = this.userDetailsResponseModel.userAddress;

    this.userRequest.userBirthDate=this.userDetailsResponseModel.userBirthDate;
    this.userRequest.userEmail=this.userDetailsResponseModel.userEmail;
    this.userRequest.userFirstName=this.userDetailsResponseModel.userFirstName;
    this.userRequest.userLastName=this.userDetailsResponseModel.userLastName;
    this.userRequest.userType=this.userDetailsResponseModel.role;

    console.log("UserRequest to modify : ", this.userRequest)
    this.userService.patchUser(this.userRequest).subscribe(res =>{
      this.toastr.success('L\'utilisateur a été modifié avec succès','Succès');
    })
  }

  onChangeCountry(event: any) {

    this.getCitiesByCoutryId();

  }



}
