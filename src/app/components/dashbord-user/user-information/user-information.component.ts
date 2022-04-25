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

  userRequest : UserRequestModel=new UserRequestModel(this.user.userId,this.user.userEmail,this.user.userPassword, this.user.userLogin,
    this.user.userFirstName, this.user.userLastName, new Date(),
    new AddressRequestModel("",0,
      new CityDtoModel(0,"","",
        new CountryDtoModel(0,"",""))),
    Provider.LOCAL, RoleCode.ADMINISTRATOR);




  addressStreet: string = "";
  addressStreetNumber : number=0;
  userType: RoleCode=RoleCode.OWNER;


  selectedCountry : CountryModel = new CountryModel(0, "","");
  selectedCity : CityModel = new CityModel(0, "","", this.selectedCountry);

  constructor(private fb: FormBuilder, private cityService:CityService, private countryService:CountryService,
              private userService:UserService) {

  }

  ngOnInit(): void {

    this.getAllCountries();

    this.userService.getUser().subscribe((res) =>{

      this.addressStreet= res.userAddress.addressStreet;

      this.addressStreetNumber= res.userAddress.addressStreetNumber;

      if(res.userAddress.addressCity != null) {
        this.selectedCity = res.userAddress.addressCity;

        if (res.userAddress.addressCity.country != null) {
          this.selectedCountry = res.userAddress.addressCity.country;
        }
      }


      this.getCitiesByCoutryId();

      this.userType= res.userRole.roleCode;

      this.user = res as UserModel;

    })


  }

  compareCountry(c1: CountryModel, c2: CountryModel): boolean {

    return c1 && c2 ? c1.countryId === c2.countryId : c1 === c2;
  }
  compareCity(item:CityModel, selected:CityModel) {

    return item && selected ? item.cityId === selected.cityId : item === selected;
  }

  getCitiesByCoutryId(){
    this.cityService.getCitiesByCoutryId(this.selectedCountry.countryId).subscribe((res) =>{
      this.cities = res;
    })
  }

  getAllCountries(){
    this.countryService.getCountries().subscribe((data) =>{
      this.countries = data;
    })
  }

  onFormSubmit() {

    let userAdress:AddressRequestModel=new AddressRequestModel(this.addressStreet, this.addressStreetNumber, this.selectedCity);
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

    })
  }

  onChangeCountry(event: any) {

    this.getCitiesByCoutryId();

  }



}
