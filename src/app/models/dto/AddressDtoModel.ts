import {CityDtoModel} from "./CityDtoModel";

export class AddressDtoModel {

  addressStreet:string;
  addressStreetNumber:number;
  //String addressCity;
  addressCity:CityDtoModel;


  constructor(addressStreet: string, addressStreetNumber: number, addressCityModel: CityDtoModel) {
    this.addressStreet = addressStreet;
    this.addressStreetNumber = addressStreetNumber;
    this.addressCityModel = addressCityModel;
  }
}
