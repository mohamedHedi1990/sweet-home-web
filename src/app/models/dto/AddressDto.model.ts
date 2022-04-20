import {CityDtoModel} from "./CityDto.model";

export class AddressDtoModel {

  addressStreet:string;
  addressStreetNumber:number;
  //String addressCity;
  addressCity:CityDtoModel;


  constructor(addressStreet: string, addressStreetNumber: number, addressCity: CityDtoModel) {
    this.addressStreet = addressStreet;
    this.addressStreetNumber = addressStreetNumber;
    this.addressCity = addressCity;
  }
}
