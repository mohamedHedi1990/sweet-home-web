
export class AuthModel {
  username: string;
  userPassword: string;
  constructor(
    userPassword: string,
    username: string,
  ) {
    this.userPassword = userPassword;
    this.username = username;


  }
}
