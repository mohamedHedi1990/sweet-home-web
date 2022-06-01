import { Component, OnInit } from '@angular/core';
import {RoleCode} from "../../enums/role-code";

@Component({
  selector: 'app-dashbord-user',
  templateUrl: './dashbord-user.component.html',
  styleUrls: ['./dashbord-user.component.css']
})
export class DashbordUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
