import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-success',
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.scss']
})
export class AlertSuccessComponent implements OnInit {

  @Input() message: string | undefined;

  isVisible = true;
  constructor() {}

  ngOnInit(): void {
    this.isVisible = true;
  }

  closeAlert() {
    this.isVisible = false;
  }

}
