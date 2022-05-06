import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {AnnouncementService} from "../../services/announcement.service";
import {AnnouncementResponseModel} from "../../models/dto/response/AnnouncementResponse.model";
import {CityModel} from "../../models/city.model";
import {CityService} from "../../services/city.service";
import {NgForm} from "@angular/forms";
import {SearchCriteriaModel} from "../../models/searchCriteria.model";

@Component({
  selector: 'app-result-search-announcement',
  templateUrl: './result-search-announcement.component.html',
  styleUrls: ['./result-search-announcement.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ResultSearchAnnouncementComponent implements OnInit {

  // @ts-ignore
  @ViewChild('myForm') form:NgForm;

  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  announcementResponseModels:AnnouncementResponseModel[]=[];

  cities: CityModel[] = [];

  constructor(config: NgbCarouselConfig, public announcementService:AnnouncementService,private cityService: CityService) {
    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.pauseOnFocus = true;
    config.wrap = false;

  }

  ngOnInit(): void {
    this.announcementService.searchAnnouncements(this.announcementService.rechercheform)
      .subscribe(res =>{
        this.announcementResponseModels=res;
      })

    this.getAllCities();
  }
  getAllCities() {
    this.cityService.getCities().subscribe((response) => {
      this.cities = response;
    });
  }

  ngAfterViewInit() {
    console.log(this.form)
    this.form.control.valueChanges
      .subscribe((values)=> {

        this.announcementService.searchAnnouncements(values)
          .subscribe(res =>{
            this.announcementResponseModels=res;
          })

        }
      )
  }

}
