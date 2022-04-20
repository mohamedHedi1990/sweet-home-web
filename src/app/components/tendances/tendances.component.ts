import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AnnouncementResponseModel} from "../../models/dto/response/AnnouncementResponse.model";

@Component({
  selector: 'app-tendances',
  templateUrl: './tendances.component.html',
  styleUrls: ['./tendances.component.scss']
})
export class TendancesComponent implements OnInit {

  // @ts-ignore
  @Input() lastPublishedAnnouncement:AnnouncementResponseModel;

  constructor() { }

  ngOnInit(): void {

    console.log("tendance : ",this.lastPublishedAnnouncement)
  }

}
