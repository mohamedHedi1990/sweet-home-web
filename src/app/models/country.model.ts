export class CountryModel {

  countryId:number;
  countryLabel:string;
  countryCode:string;


  constructor(countryId: number, countryLabel: string, countryCode: string) {
    this.countryId = countryId;
    this.countryLabel = countryLabel;
    this.countryCode = countryCode;
  }
}
