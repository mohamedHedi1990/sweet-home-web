import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit {
  showAlertError: any;
  message="L'adresse e-mail utilisée n'est pas enregistrée. Veuillez vérifier votre entrée.";
  userEmail: string="";
  showAlertSuccess:boolean=false;
  success_message= "Nous vous avons envoyé un mail pour réinitialiser votre mot de passe.\n" +
  "Veuileez consulter votre courriel";

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.showAlertError){
        this.showAlertError=false;
      }
    }, 15000);
  }

  onFormSubmit() {
    this.userService.requestResetPassword(this.userEmail).subscribe(res =>{
      setInterval(() => {
        this.showAlertSuccess=true;
      }, 15000);

    },error => {
      this.showAlertError = true;
    })
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      if(this.showAlertError){
        this.showAlertError=false;
      }
    }, 15000);
  }
}
