import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [AlertErrorComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, BsDropdownModule.forRoot(), RouterModule,NgbModule],
  exports: [AlertErrorComponent, NavbarComponent, FooterComponent],
})
export class SharedModule {}
