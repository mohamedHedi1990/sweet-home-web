export class SearchCriteriaModel {
  announcementCityLabel: string;
  announcementStartDate: Date;
  announcementEndDate: Date;
  nbGuest: number;

  constructor(
    announcementCityLabel: string,
    announcementStartDate: Date,
    announcementEndDate: Date,
    nbGuest: number
  ) {
    this.announcementCityLabel = announcementCityLabel;
    this.announcementStartDate = announcementStartDate;
    this.announcementEndDate = announcementEndDate;
    this.nbGuest = nbGuest;
  }
}
