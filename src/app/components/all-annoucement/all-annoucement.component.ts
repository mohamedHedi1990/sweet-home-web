import {Component, OnInit, ViewChild} from '@angular/core';
import {AnnouncementResponseModel} from "../../models/dto/response/AnnouncementResponse.model";
import {SearchRequestModel} from "../../models/dto/request/SearchRequest.model";
import {SearchCriteriaModel} from "../../models/searchCriteria.model";
import {AnnouncementService} from "../../services/announcement.service";
import {CityModel} from "../../models/city.model";
import {CityService} from "../../services/city.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-all-annoucement',
  templateUrl: './all-annoucement.component.html',
  styleUrls: ['./all-annoucement.component.scss']
})
export class AllAnnoucementComponent implements OnInit {

  // @ts-ignore
  @ViewChild('myForm') form: NgForm;

  totalItems:number=0;
  currentPage:number=1;
  selectedSize: number=12;

  searchRequest: SearchRequestModel=new class implements SearchRequestModel {
    currentPage: number=0;
    // @ts-ignore
    searchCriteria: SearchCriteriaModel=new SearchCriteriaModel();
    size: number=5;
  };
  announcements: AnnouncementResponseModel[]=[];

  cities: CityModel[] = [];
  sizes =[4, 8, 12, 16, 20];

  constructor(private announcementService:AnnouncementService, private cityService:CityService) { }

  ngOnInit(): void {
    this.getAllAnnouncements();

    this.getAllCities();
  }

  getAllCities() {
    this.cityService.getCities().subscribe(response => {
      this.cities = response;
    });
  }

  getAllAnnouncements(){
    this.searchRequest.currentPage=this.currentPage;
    this.searchRequest.size=this.selectedSize;
    this.announcementService.search(this.searchRequest).subscribe(res =>{
      this.announcements=res.announcementResponseList;
      this.totalItems=res.totalItems;
      console.log("list announcement :",this.announcements);
    })
  }

  onBootPageChanged(e:number) {
    this.currentPage=e;
    this.searchRequest.currentPage=e;
    this.announcementService.search(this.searchRequest).subscribe(res =>{
      this.announcements=res.announcementResponseList;
      this.totalItems=res.totalItems;
    })
  }

  ngAfterViewInit() {
    console.log(this.form);
    this.form.control.valueChanges.subscribe((values) => {
      console.log("values : ",values)
      this.searchRequest.searchCriteria.announcementCityLabel=values.announcementCityLabel;
      this.searchRequest.searchCriteria.nbGuest = values.nbGuest;
      this.searchRequest.searchCriteria.announcementStartDate = values.announcementStartDate;
      this.searchRequest.searchCriteria.announcementEndDate = values.announcementEndDate;
      this.announcementService.search(this.searchRequest).subscribe((res) => {
        this.announcements = res.announcementResponseList;
        this.totalItems=res.totalItems;
      });
    });
  }

  initializeSearch() {
    this.searchRequest=new class implements SearchRequestModel {
      currentPage=1;
      // @ts-ignore
      searchCriteria: SearchCriteriaModel=new SearchCriteriaModel();
      size=12;
    }
    this.getAllAnnouncements();
  }
}
