import {CountryDtoModel} from "./CountryDto.model";

export class CityDtoModel {

  cityId:number;
  cityLabel:string;
  cityCode:string;
  country:CountryDtoModel;


  constructor(cityId: number, cityLabel: string, cityCode: string, country: CountryDtoModel) {
    this.cityId = cityId;
    this.cityLabel = cityLabel;
    this.cityCode = cityCode;
    this.country = country;
  }
}
