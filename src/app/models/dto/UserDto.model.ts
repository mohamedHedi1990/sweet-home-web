export class UserDtoModel {

  userFirstName:string;
  userLastName:string;
  userDateInscription:Date;
  userPictureUrl:string;


  constructor(userFirstName: string, userLastName: string, userDateInscription: Date, userPictureUrl:string) {
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
    this.userDateInscription = userDateInscription;
    this.userPictureUrl = userPictureUrl;
  }
}
