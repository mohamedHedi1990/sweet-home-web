import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../../models/user.model";
import {FormBuilder} from "@angular/forms";
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
        new CountryDtoModel(0,"",""))),
    Provider.LOCAL, RoleCode.ADMINISTRATOR);


  userDetailsResponseModel: UserDetailsResponseModel=new UserDetailsResponseModel("","",
    new Date(),"","",new Date(),new AddressDtoModel("",
      0,new CityDtoModel(0,"","",new CountryDtoModel(0,
        "",""))),RoleCode.ADMINISTRATOR);


  constructor(private cityService:CityService, private countryService:CountryService,
              private userService:UserService, private toastr: ToastrService) {

  }

  ngOnInit(): void {

    this.getAllCountries();

    this.userService.getUser().subscribe((res) =>{

      console.log("res : ",res)

      this.userDetailsResponseModel = res;

      this.getCitiesByCoutryId();

    })


  }

  compareCountry(c1: CountryModel, c2: CountryModel): boolean {

    return c1 && c2 ? c1.countryId === c2.countryId : c1 === c2;
  }
  compareCity(item:CityModel, selected:CityModel) {

    return item && selected ? item.cityId === selected.cityId : item === selected;
  }


  getCitiesByCoutryId(){
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
