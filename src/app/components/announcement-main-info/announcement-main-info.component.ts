import {Component, Input, OnInit} from '@angular/core';
import {AnnouncementResponseModel} from "../../models/dto/response/AnnouncementResponse.model";
import {AnnouncementType} from "../../enums/announcement-type";

@Component({
  selector: 'app-announcement-main-info',
  templateUrl: './announcement-main-info.component.html',
  styleUrls: ['./announcement-main-info.component.scss']
})
export class AnnouncementMainInfoComponent implements OnInit {

  // @ts-ignore
  @Input() lastPublishedAnnouncement:AnnouncementResponseModel;

  constructor() { }

  ngOnInit(): void {

    console.log("tendance : ",this.lastPublishedAnnouncement)

  }


  getAnnouncementType(announcementType: AnnouncementType):string{
    const type = announcementType.toString();
    return AnnouncementType[type as keyof typeof AnnouncementType];

  }


}
