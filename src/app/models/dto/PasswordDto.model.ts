export class PasswordDtoModel {

  password:string;

  token:string;

  confirmedPassword:string;


  constructor(password: string, token: string, confirmedPassword: string) {
    this.password = password;
    this.token = token;
    this.confirmedPassword = confirmedPassword;
  }
}
