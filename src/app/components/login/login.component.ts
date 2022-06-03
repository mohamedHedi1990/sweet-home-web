import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthModel } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSuccess: boolean = false;
  activatedAccount: boolean = false;
  showAlertError: any = false;
  showAlertSuccess: any = false;
  auth: AuthModel = new AuthModel('', '');
  message = 'Mauvaise adresse e-mail ou mauvais mot de passe';
  messageSuccess = 'Das Passwort wurde erfolgreich geändert';
  viewPassword: boolean = false;

  redirectUrl: string = `/main-profile`;
  idAnnounce:any;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {

    sessionStorage.clear();
    //console.log('token : ', sessionStorage.getItem('token'));

    this.route.queryParams.subscribe((params) => {
      this.idAnnounce = params['announcementId'];
    })
    //this.idAnnounce = this.route.snapshot.paramMap.get('announcementId');
    console.log("idAnnounce : ",this.idAnnounce)

  }

  onFormSubmit() {
    const auth = new AuthModel(this.auth.userPassword, this.auth.email);
    this.login(auth);
  }

  changeViewPassword() {
    this.viewPassword = !this.viewPassword;
  }

  private login(auth: AuthModel) {
    this.authService.signIn(auth).subscribe(
      (response) => {
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('current-user-id', response.id);
        sessionStorage.setItem('current-user-role', response.roles[0]);
        if(this.idAnnounce == undefined)
        this.router.navigateByUrl(this.redirectUrl);
        else
          this.router.navigateByUrl('/annoucement-details/'+this.idAnnounce);

      },
      (error) => {
        this.showAlertError = true;
      }
    );
  }
}
