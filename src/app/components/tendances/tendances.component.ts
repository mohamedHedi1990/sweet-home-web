import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AnnouncementResponse} from "../../models/dto/response/AnnouncementResponse";

@Component({
  selector: 'app-tendances',
  templateUrl: './tendances.component.html',
  styleUrls: ['./tendances.component.scss']
})
export class TendancesComponent implements OnInit {

  @Input() tendance:AnnouncementResponse;

  constructor() { }

  ngOnInit(): void {

    console.log("tendance : ",this.tendance)
  }

}
