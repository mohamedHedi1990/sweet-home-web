import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  private currentRoute: any;

  user: UserModel = new UserModel('', '', '', '', '', '', 'OWNER');
  showAlert = false;
  isApplicationEmailsActive: boolean = false;
  showAlertError: boolean = false;
  existe: boolean = false;
  showAlertSuccess: boolean = false;
  message: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  showSuccess(msg: string) {
    this.toastr.success('', msg);
  }
  onFormSubmit() {
    if (this.user.userPassword !== this.user.userConfirmPassword) {
      this.showAlert = true;
    }
    if (this.existe === false && this.showAlert === false) {
      const user = new UserModel(
        this.user.userFirstName,
        this.user.userLastName,
        this.user.userLogin,
        this.user.userPassword,
        this.user.userPhoneNumber,
        this.user.userEmail,
        this.user.userType
      );
      this.signUp(user);
    }
  }
  matchPassword(event: any) {
    if (
      event.target.value !== '' &&
      event.target.value !== this.user.userPassword
    ) {
      this.showAlert = true;
    } else {
      this.showAlert = false;
    }
  }

  signUp(user: UserModel) {
    this.userService.signUp(user).subscribe(
      (response) => {
        this.showAlertSuccess = true;
        this.message = 'Votre compte a été bien crée';
        this.showSuccess(this.message);
        this.router.navigateByUrl(`/user-edit`);
      },
      (error) => {
        //this.showAlertError = true;
      }
    );
  }

  checkValue(event: any) {
    this.isApplicationEmailsActive = !event.currentTarget.checked;
  }

  verifyUser() {
    /*this.userService.verifyEmail(this.user.userEmail).subscribe(
      (response) => {
        this.existe = response;
      },
      (error) => {
        this.showAlertError = true;
      }
    );*/
  }
}
