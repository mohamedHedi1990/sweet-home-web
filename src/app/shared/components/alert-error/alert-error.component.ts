import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.scss'],
})
export class AlertErrorComponent implements OnInit {
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
