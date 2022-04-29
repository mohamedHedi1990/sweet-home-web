import { Component, OnInit } from '@angular/core';
import {UserDetailsResponseModel} from "../../../models/dto/response/UserDetailsResponse.model";
import {AddressDtoModel} from "../../../models/dto/AddressDto.model";
import {CityDtoModel} from "../../../models/dto/CityDto.model";
import {CountryDtoModel} from "../../../models/dto/CountryDto.model";
import {RoleCode} from "../../../enums/role-code";
import {UserService} from "../../../services/user.service";
import {Event, NavigationStart, NavigationEnd, NavigationError, Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ifTokenExist: boolean=false;
  currentRoute: string="";
  userDetailsResponseModel: UserDetailsResponseModel=new UserDetailsResponseModel("","",
    new Date(),"","",new Date(),new AddressDtoModel("",
      0,new CityDtoModel(0,"","",new CountryDtoModel(1,
        "Tunisie","TN"))),RoleCode.OWNER,"");

  photoNotFound:string='assets/images/agent/user.jpg';

  constructor(private userService:UserService, private router:Router) {
    this.router.events.subscribe((event: Event) => {
      console.log(event);
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(event);
      }


    });
  }

  ngOnInit(): void {
    this.ifTokenExist = localStorage.getItem("token") !== null ? true : false;
    if(this.ifTokenExist) {
      this.getCurrentUser();
    }

  }

  getCurrentUser(){
    this.userService.getUser().subscribe((res) =>{

      this.userDetailsResponseModel = res;

      if(this.userDetailsResponseModel.userPictureUrl == null){
        this.userDetailsResponseModel.userPictureUrl = this.photoNotFound;
      }

    })
  }

  hasOwnerRole():boolean{
    if(localStorage.getItem("current-user-role"))
      if(localStorage.getItem("current-user-role") === RoleCode[0]
        || localStorage.getItem("current-user-role") === RoleCode[2])
        return true;

    return false;
  }

}
