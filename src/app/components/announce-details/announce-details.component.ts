import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announce-details',
  templateUrl: './announce-details.component.html',
  styleUrls: ['./announce-details.component.scss']
})
export class AnnounceDetailsComponent implements OnInit {
isShowEssentiel = true;
isShowDescript = true;
  imagesDetails = [
    {
      image: "../../../assets/images/announce-details/img-2.png",
      descript:"lorem ipsum",
      title: "image-2"
    },{
      image: "../../../assets/images/announce-details/img-3.webp",
      descript:"lorem ipsum",
      title: "image-3"
    },{
      image: "../../../assets/images/announce-details/img-4.webp",
      descript:"lorem ipsum",
      title: "image-4"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(block : any){
    
    if(block === 'descript'){
      this.isShowDescript = !this.isShowDescript;   
    }else{
      this.isShowEssentiel = !this.isShowEssentiel;  
    }
  }

}
