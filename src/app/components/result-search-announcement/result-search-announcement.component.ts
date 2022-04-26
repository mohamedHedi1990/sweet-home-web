import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-result-search-announcement',
  templateUrl: './result-search-announcement.component.html',
  styleUrls: ['./result-search-announcement.component.css'],
  providers: [NgbCarouselConfig]
})
export class ResultSearchAnnouncementComponent implements OnInit {


  //@ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;

  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.pauseOnFocus = true;
    config.wrap = false;

  }

  ngOnInit(): void {

  }

}
