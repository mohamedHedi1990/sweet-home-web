import { Component, OnInit } from '@angular/core';
import { UserDetailsResponseModel } from '../../../models/dto/response/UserDetailsResponse.model';
import { AddressDtoModel } from '../../../models/dto/AddressDto.model';
import { CityDtoModel } from '../../../models/dto/CityDto.model';
import { CountryDtoModel } from '../../../models/dto/CountryDto.model';
import { RoleCode } from '../../../enums/role-code';
import { UserService } from '../../../services/user.service';
import {
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  ifTokenExist: boolean = false;
  currentRoute: string = '';
  userDetailsResponseModel: UserDetailsResponseModel =
    new UserDetailsResponseModel(
      '',
      '',
      new Date(),
      '',
      '',
      new Date(),
      new AddressDtoModel(
        '',
        0,
        new CityDtoModel(0, '', '', new CountryDtoModel(1, 'Tunisie', 'TN'))
      ),
      RoleCode.OWNER,
      ''
    );

  photoNotFound: string = 'assets/images/agent/user.jpg';

  constructor(private userService: UserService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      console.log(event);
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(event);
      }
    });
  }

  ngOnInit(): void {
    this.ifTokenExist = sessionStorage.getItem('token') !== null ? true : false;
    if (this.ifTokenExist) {
      this.getCurrentUser();
    }
  }

  async getCurrentUser() {
    this.userDetailsResponseModel = await this.userService.getUser();
    if (this.userDetailsResponseModel.userPictureUrl == null) {
      this.userDetailsResponseModel.userPictureUrl = this.photoNotFound;
    }
  }

  hasOwnerRole(): boolean {
    if (sessionStorage.getItem('current-user-role'))
      if (
        sessionStorage.getItem('current-user-role') === RoleCode[0] ||
        sessionStorage.getItem('current-user-role') === RoleCode[2]
      )
        return true;

    return false;
  }

  isHomePage(): boolean{
    if(this.currentRoute === "/home") return true;
    return  false;
  }

  onNewAnnoucement() {
    if(this.hasOwnerRole() && this.ifTokenExist){
      this.router.navigateByUrl('/main-profile?newAnn='+true)
    } else{
      this.router.navigateByUrl('/login?newAnn='+true)
    }
  }
}
