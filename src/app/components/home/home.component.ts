import { CityService } from './../../services/city.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

//import moment from 'moment';
import { SearchCriteriaModel } from '../../../../src/app/models/searchCriteria.model';
import { CityModel } from '../../../../src/app/models/city.model';
import { AnnouncementService } from '../../services/announcement.service';
import { AnnouncementResponseModel } from '../../models/dto/response/AnnouncementResponse.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  rechercheform: SearchCriteriaModel = new SearchCriteriaModel(
    '',
    new Date(),
    new Date(),
    1
  );
  cities: CityModel[] = [];
  lastPublishedAnnouncements: AnnouncementResponseModel[] = [];
  constructor(
    private cityService: CityService,
    private announcementService: AnnouncementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCities();
    this.getAllAnnouncement();
  }
  getAllCities() {
    this.cityService.getCities().subscribe((response) => {
      this.cities = response;
    });
  }

  getAllAnnouncement() {
    this.announcementService.getAllAnnouncement().subscribe((data) => {
      this.lastPublishedAnnouncements = data;
    });
  }

  search() {
    this.router.navigateByUrl(
      '/result-announcement?city=' +
        this.rechercheform.announcementCityLabel +
        '&guestNumber=' +
        this.rechercheform.nbGuest +
        '&startDate=' +
        this.rechercheform.announcementStartDate +
        '&endDate=' +
        this.rechercheform.announcementEndDate
    );
  }
}
