export class UserDtoModel {

  userFirstName:string;
  userLastName:string;
  userDateInscription:Date;


  constructor(userFirstName: string, userLastName: string, userDateInscription: Date) {
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
    this.userDateInscription = userDateInscription;
  }
}
