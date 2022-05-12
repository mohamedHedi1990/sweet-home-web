export class AuthModel {
  email: string;
  userPassword: string;
  constructor(userPassword: string, email: string) {
    this.userPassword = userPassword;
    this.email = email;
  }
}
