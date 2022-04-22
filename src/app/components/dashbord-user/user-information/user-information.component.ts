import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../../models/user.model";
import {FormBuilder, FormGroup} from "@angular/forms";
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
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
  providers: [MessageService]
})
export class UserInformationComponent implements OnInit {

  // @ts-ignore
  userInfoForm: FormGroup;
  countries: CountryModel[]= [];
  cities : CityModel[]=[]
  // @ts-ignore
  @Input() user:UserModel=new UserModel();
  /* (userEmail: string, userPassword: string, userLogin: string, userFirstName: string, userLastName: string,
              userBirthDate: Date, userAddress: AddressRequestModel, provider: Provider, userType: RoleCode) */
  userRequest : UserRequestModel=new UserRequestModel(this.user.userId,this.user.userEmail,this.user.userPassword, this.user.userLogin,
                                                      this.user.userFirstName, this.user.userLastName, new Date(),
                                                       new AddressRequestModel("",0,
                                                         new CityDtoModel(0,"","",
                                                           new CountryDtoModel(0,"",""))),
                                                            Provider.LOCAL, RoleCode.ADMINISTRATOR);


  existe: boolean=false;
  countryLabel: string="";
  cityLabel: string="";
  addressStreet: string = "";
  addressStreetNumber : number=0;
  userType: RoleCode=RoleCode.OWNER;

  constructor(private fb: FormBuilder, private cityService:CityService, private countryService:CountryService,
              private userService:UserService, private messageService: MessageService) { }

  ngOnInit(): void {

    //Just for test
    this.userService.getUser().subscribe((res) =>{
      console.log("any user :: ",res)
      this.addressStreet= res.userAddress.addressStreet;

      this.addressStreetNumber= res.userAddress.addressStreetNumber;

      this.cityLabel= res.userAddress.addressCity.cityLabel;

      this.countryLabel= res.userAddress.addressCity.country.countryLabel;

      this.getCitiesByCoutryId(this.countryLabel);

      this.userType= res.userRole.roleCode;
      console.log("userType : ",this.userType)

      this.user = res as UserModel;
      //this.user.userPassword="***********";

      console.log("countryLabel after: ", this.countryLabel)

    })
    this.getAllCountries();
    //this.userRequest=new UserRequestModel()
  }

  getCitiesByCoutryId(e:any){
    console.log("Country Label : ",e);
    let findedCountry:CountryModel;
    for (let i = 0; i< this.countries.length; i++){
      if(this.countries[i].countryLabel === e) {
        findedCountry= this.countries[i];
        this.cityService.getCitiesByCoutryId(findedCountry.countryId).subscribe((res) =>{
          console.log("CitiesByCoutryId : ", res)
          this.cities = res;
        })
        break;
      }
    }

  }

  getAllCountries(){
    this.countryService.getCountries().subscribe((data) =>{
      this.countries = data;
    })
  }

  verifyUser() {

  }

  onFormSubmit() {

     let countryDtoModel : CountryDtoModel= this.getCorrespondingCoutry();
     let cityDtoModel : CityDtoModel = this.getCorrespondingCity(countryDtoModel);
     let userAdress:AddressRequestModel=new AddressRequestModel(this.addressStreet, this.addressStreetNumber, cityDtoModel);
     this.userRequest.userAddress = userAdress;

     this.userRequest.userId= this.user.userId;
     this.userRequest.userBirthDate=this.user.userBirthDate;
    this.userRequest.userEmail=this.user.userEmail;
    this.userRequest.userFirstName=this.user.userFirstName;
    this.userRequest.userLastName=this.user.userLastName;
    this.userRequest.userLogin=this.user.userLogin;
    this.userRequest.userPassword=this.user.userPassword;
    this.userRequest.userType=this.userType;
    this.userRequest.provider = this.user.provider != null ? this.user.provider:Provider.LOCAL;

    console.log("UserRequest to modify : ", this.userRequest)
     this.userService.saveUser(this.userRequest).subscribe(res =>{
       this.messageService.add({key: 'tl',severity:'success', summary: 'Succés', detail: 'Les données de l\'utilisateur sont modifiés avec succés', life:4000});

     })
  }

  getCorrespondingCoutry(): CountryDtoModel{
    let findedCountry: CountryDtoModel= new CountryDtoModel(0,"","");
    for (let i = 0; i< this.countries.length; i++){
      if(this.countries[i].countryLabel === this.countryLabel) {
        findedCountry= this.countries[i];
        break;
      }
    }
    console.log("findingCountry : ",findedCountry)
    return findedCountry;
    /*this.countries.forEach(country =>{
      if(country.countryLabel === this.countryLabel) {
        findingCountry= country;
      }
    })*/
  }

  getCorrespondingCity(countryDtoModel : CountryDtoModel): CityDtoModel {
    let findedCity: CityDtoModel = new CityDtoModel(0, "", "", countryDtoModel);
    for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i].cityLabel === this.cityLabel) {
        findedCity = this.cities[i];
        break;
      }
    }
    console.log("findedCity : ", findedCity)
    return findedCity;

  }
}
