import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RoleCode} from "../../enums/role-code";
import {ActivatedRoute} from "@angular/router";
import {NewAnnoucementComponent} from "./new-announcement/new-announcement.component";
import {TabsetComponent} from "ng-uikit-pro-standard";

@Component({
  selector: 'app-dashbord-user',
  templateUrl: './dashbord-user.component.html',
  styleUrls: ['./dashbord-user.component.css']
})
export class DashbordUserComponent implements OnInit, AfterViewInit {

  @ViewChild("staticTabs") staticTabs!:TabsetComponent;
  newAnn: boolean=false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.newAnn = params['newAnn'];
    })

  }

  hasOwnerRole():boolean{
    if(sessionStorage.getItem("current-user-role"))
      if(sessionStorage.getItem("current-user-role") === RoleCode[0]
        || sessionStorage.getItem("current-user-role") === RoleCode[2])
        return true;

    return false;
  }

  hasLodgerRole():boolean{
    if(sessionStorage.getItem("current-user-role"))
      if(sessionStorage.getItem("current-user-role") === RoleCode[0]
        || sessionStorage.getItem("current-user-role") === RoleCode[1])
        return true;

    return false;
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.newAnn = params['newAnn'];
    })
    console.log("newAnn after: ",this.newAnn);
    if(this.newAnn) this.staticTabs.setActiveTab(4);
  }

}
