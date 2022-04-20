import {CityDto} from "./CityDto";

export class AddressDto {

  addressStreet:string;
  addressStreetNumber:number;
  //String addressCity;
  addressCity:CityDto;


  constructor(addressStreet: string, addressStreetNumber: number, addressCity: CityDto) {
    this.addressStreet = addressStreet;
    this.addressStreetNumber = addressStreetNumber;
    this.addressCity = addressCity;
  }
}
