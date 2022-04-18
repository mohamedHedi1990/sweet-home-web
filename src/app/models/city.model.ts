export class CityModel {
  cityId: number;
  cityLabel: string;
  cityCode: string;
  constructor(cityId: number, cityLabel: string, cityCode: string) {
    this.cityId = cityId;
    this.cityLabel = cityLabel;
    this.cityCode = cityCode;
  }
}
