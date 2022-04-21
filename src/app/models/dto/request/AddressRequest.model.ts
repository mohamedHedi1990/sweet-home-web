import {CityDtoModel} from "../CityDto.model";

export class AddressRequestModel {
  constructor(addressStreet: string, addressStreetNumber: number, addressCity: CityDtoModel) {
    this.addressStreet = addressStreet;
    this.addressStreetNumber = addressStreetNumber;
    this.addressCity = addressCity;
  }

    addressStreet:string;
    addressStreetNumber:number;
    addressCity:CityDtoModel;
  
}
