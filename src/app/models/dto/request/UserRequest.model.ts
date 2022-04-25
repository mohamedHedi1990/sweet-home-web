import {AddressRequestModel} from "./AddressRequest.model";
import {Provider} from "../../../enums/Provider";
import {RoleCode} from "../../../enums/role-code";

export class UserRequestModel {

  userId:number;
  userEmail:string;
  userPassword:string;
  userLogin:string;
  userFirstName:string;
  userLastName:string;
  userBirthDate:Date;
  userAddress:AddressRequestModel;
  provider:Provider;
  userType:RoleCode;


  constructor(userId:number,userEmail: string, userPassword: string, userLogin: string, userFirstName: string, userLastName: string,
              userBirthDate: Date, userAddress: AddressRequestModel, provider: Provider, userType: RoleCode) {
    this.userId = userId;
    this.userEmail = userEmail;
    this.userPassword = userPassword;
    this.userLogin = userLogin;
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
    this.userBirthDate = userBirthDate;
    this.userAddress = userAddress;
    this.provider = provider;
    this.userType = userType;
  }

}
