import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AlertErrorComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule],
  exports: [AlertErrorComponent, NavbarComponent, FooterComponent],
})
export class SharedModule {}
