import {CountryModel} from "./country.model";

export class CityModel {
  cityId: number;
  cityLabel: string;
  cityCode: string;
  country : CountryModel;
  constructor(cityId: number, cityLabel: string, cityCode: string, country : CountryModel) {
    this.cityId = cityId;
    this.cityLabel = cityLabel;
    this.cityCode = cityCode;
    this.country = country;
  }
}
