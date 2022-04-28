import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ifTokenExist: boolean=false;
  constructor() {  
  }
  
  ngOnInit(): void {

    console.log("in navbar : ",localStorage.getItem("token"))
   this.ifTokenExist = localStorage.getItem("token") !== null ? false : true;
  
  }

}
