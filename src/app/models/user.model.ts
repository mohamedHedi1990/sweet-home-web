export class UserModel {
  userFirstName: string;
  userLastName: string;
  userLogin: string;
  userPassword: string;
  userConfirmPassword: string;
  userPhoneNumber: string;
  userEmail: string;
  userType: string;

  constructor(
    userFirstName: string,
    userLastName: string,
    userLogin: string,
    userPassword: string,
    userPhoneNumber: string,
    userEmail: string,
    userType: string
  ) {
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
    this.userLogin = userLogin;
    this.userPassword = userPassword;
    this.userPhoneNumber = userPhoneNumber;
    this.userEmail = userEmail;
    this.userType = userType;
    this.userConfirmPassword = this.userPassword;
  }
}
