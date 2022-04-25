import {RoleCode} from "../enums/role-code";
import {Provider} from "../enums/Provider";

export class UserModel {

  userId:number;
  userFirstName: string;
  userLastName: string;
  userLogin: string;
  userPassword: string;
  userConfirmPassword: string;
  userPhoneNumber: string;
  userEmail: string;
  userType: RoleCode;
  userBirthDate:Date;
  provider:Provider;

  constructor(
    userId:number,
    userFirstName: string,
    userLastName: string,
    userLogin: string,
    userPassword: string,
    userPhoneNumber: string,
    userEmail: string,
    userType: RoleCode,
    userBirthDate: Date,
    provider:Provider,
  ) {
    this.userId = userId;
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
    this.userLogin = userLogin;
    this.userPassword = userPassword;
    this.userPhoneNumber = userPhoneNumber;
    this.userEmail = userEmail;
    this.userType = userType;
    this.userConfirmPassword = this.userPassword;
    this.userBirthDate = userBirthDate;
    this.provider = provider
  }
}
