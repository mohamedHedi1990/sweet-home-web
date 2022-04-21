import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../../models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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

  // @ts-ignore
  userInfoForm: FormGroup;
  countries: CountryModel[]= [];
  cities : CityModel[]=[]
  // @ts-ignore
  @Input() user:UserModel=new UserModel();
  /* (userEmail: string, userPassword: string, userLogin: string, userFirstName: string, userLastName: string,
              userBirthDate: Date, userAddress: AddressRequestModel, provider: Provider, userType: RoleCode) */
  userRequest : UserRequestModel=new UserRequestModel(this.user.userEmail,this.user.userPassword, this.user.userLogin,
                                                      this.user.userFirstName, this.user.userLastName, new Date(),
                                                       new AddressRequestModel("",0,
                                                         new CityDtoModel(0,"","",
                                                           new CountryDtoModel(0,"",""))), Provider.LOCAL, RoleCode.ADMINISTRATOR);


  existe: boolean=false;

  constructor(private fb: FormBuilder, private cityService:CityService, private countryService:CountryService,
              private userService:UserService) { }

  ngOnInit(): void {
    this.getAllCountries();
    this.createUserInfoForm();
    //this.userRequest=new UserRequestModel()
  }

  getCitiesByCoutryId(e:CountryModel){
    this.cityService.getCitiesByCoutryId(e.countryId).subscribe((res) =>{
      this.cities = res;
    })
  }

  getAllCountries(){
    this.countryService.getCountries().subscribe((data) =>{
      this.countries = data;
    })
  }



  createUserInfoForm() {
    this.userInfoForm = this.fb.group({
      userFirstName: [null, [Validators.required]],
      userLastName: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      userEmail: [null, [Validators.required]],
      userPhoneNumber: [null, [Validators.required]],
      userType: [null, [Validators.required]],
      ville : [null, [Validators.required]],
      adresse : [null, [Validators.required]]
    });
  }

  verifyUser() {

  }

  onFormSubmit() {
     this.userService.saveUser(this.userRequest).subscribe(res =>{

     })
  }
}
