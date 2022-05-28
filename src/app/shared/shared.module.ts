import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';

@NgModule({
  declarations: [AlertErrorComponent, NavbarComponent, FooterComponent, AlertSuccessComponent],
  imports: [CommonModule, BsDropdownModule.forRoot(), RouterModule,NgbModule],
  exports: [AlertErrorComponent, NavbarComponent, FooterComponent, AlertSuccessComponent],
})
export class SharedModule {}
