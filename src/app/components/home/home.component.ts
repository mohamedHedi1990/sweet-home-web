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
import {AnnouncementModel} from "../../models/Announcement.model";
import {AnnouncementService} from "../../services/announcement.service";
import {AnnouncementResponseModel} from "../../models/dto/response/AnnouncementResponse.model";
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
   lastPublishedAnnouncements :AnnouncementResponseModel [] = [];
  /*tendances = [
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'Villa bleu',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
  ];*/
  constructor(private cityService: CityService, private announcementService:AnnouncementService) {}

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
    this.announcementService.getAllAnnouncement().subscribe(data =>{
      this.lastPublishedAnnouncements=data;
    })
  }
  search() {}
}
