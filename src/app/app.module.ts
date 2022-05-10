import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { DashbordUserComponent } from './components/dashbord-user/dashbord-user.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsModule, WavesModule } from 'ng-uikit-pro-standard';
import { AnnouncementMainInfoComponent } from './components/announcement-main-info/announcement-main-info.component';
import { UserInformationComponent } from './components/dashbord-user/user-information/user-information.component';
import { ResultSearchAnnouncementComponent } from './components/result-search-announcement/result-search-announcement.component';
import { InterceptorService } from './services/interceptor.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { AnnounceDetailsComponent } from './components/announce-details/announce-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnnouncementUserComponent } from './components/dashbord-user/announcement-user/announcement-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    LoginComponent,
    DashbordUserComponent,
    AnnounceDetailsComponent,
    UserInformationComponent,
    ResultSearchAnnouncementComponent,
    AnnouncementMainInfoComponent,
    AnnouncementUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule,

    MatButtonModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatInputModule,

    MatRippleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSliderModule,
    NgSelectModule,
    ToastrModule.forRoot({ timeOut: 8000, positionClass: 'toast-bottom-left' }), // ToastrModule added
    MatTabsModule,
    TabsModule.forRoot(),
    NgbCarouselModule,
    NgbModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
