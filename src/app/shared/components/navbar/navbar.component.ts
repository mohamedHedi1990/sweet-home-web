import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 href : any
 navHome = false
 navOther = false
  constructor(private router: Router) { 
    this.href = this.router.url;    
   /* if (this.href = '/home'){
      console.log('home')
      this.navHome = true
    
    }else if (this.href='/annouce-details'){
      console.log('others')
      this.navHome = false
    }*/
   
  }
  
  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.href);

  
  }

}
