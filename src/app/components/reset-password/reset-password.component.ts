import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PasswordDtoModel} from "../../models/dto/PasswordDto.model";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, AfterViewInit {
  showAlertError: boolean=false;
  message='Le mot de passe a déjà été réinitialisé en utilisant ce lien';
  showAlertMatchPassword= false;

  passwordReset: PasswordDtoModel= new PasswordDtoModel("","","");

  constructor(private userService:UserService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.passwordReset.token = params['code'];
      this.userService
        .verifyCodePassword(this.passwordReset.token)
        .subscribe((res) => {

        },error => {
          this.showAlertError=true;
        });
    });

    setInterval(() => {
      if(this.showAlertError){
        this.showAlertError=false;
      }
      if(this.showAlertMatchPassword){
        this.showAlertMatchPassword=false;
      }
    }, 15000);
  }

  onFormSubmit() {
    this.userService.modifyPassword(this.passwordReset).subscribe(response => {
      this.router.navigateByUrl(`/login`);
    }, error => {
      this.showAlertError = true;

    });
  }

  matchPassword(event: any) {
    if((event.target.value !== '') && (event.target.value !== this.passwordReset.password)){
      this.showAlertMatchPassword = true;
    } else {
      this.showAlertMatchPassword = false;
    }
  }

  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.passwordReset.token = params['code'];
    });
  }
}
