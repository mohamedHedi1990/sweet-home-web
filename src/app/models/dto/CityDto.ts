import {CountryDto} from "./CountryDto";

export class CityDto {

  cityId:number;
  cityLabel:string;
  cityCode:string;
  country:CountryDto;


  constructor(cityId: number, cityLabel: string, cityCode: string, country: CountryDto) {
    this.cityId = cityId;
    this.cityLabel = cityLabel;
    this.cityCode = cityCode;
    this.country = country;
  }
}
