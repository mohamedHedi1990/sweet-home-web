import { UserModel } from './user.model';
export class AnnouncementModel {
  announcementId: number;
  announcementTitle: string;
  announcementCreatedDate: Date;
  announcementEndDate: Date;
  announcementNumberLike: number;
  announcementNumberDislike: number;
  announcementType: string;
  announcementBedNumber: number;
  announcementRoomNumber: number;
  announcementBathRoomNumber: number;
  globalRate: number;
  announcementCost: number;
  announcementOwnerPublished: UserModel;
  announcementMainPictureUrl: string;

  constructor(
    announcementId: number,
    announcementTitle: string,
    announcementCreatedDate: Date,
    announcementEndDate: Date,
    announcementNumberLike: number,
    announcementNumberDislike: number,
    announcementType: string,
    announcementBedNumber: number,
    announcementRoomNumber: number,
    globalRate: number,
    announcementCost: number,
    announcementOwnerPublished: UserModel,
    announcementMainPictureUrl: string
  ) {
    this.announcementBathRoomNumber = announcementBedNumber;
    this.announcementBedNumber = announcementBedNumber;
    this.announcementCost = announcementCost;
    this.announcementCreatedDate = announcementCreatedDate;
    this.announcementEndDate = announcementEndDate;
    this.announcementId = announcementId;
    this.announcementMainPictureUrl = announcementMainPictureUrl;
    this.announcementNumberDislike = announcementNumberDislike;
    this.announcementNumberLike = announcementNumberLike;
    this.announcementOwnerPublished = announcementOwnerPublished;
    this.announcementRoomNumber = announcementRoomNumber;
    this.announcementTitle = announcementTitle;
    this.announcementType = announcementType;
    this.globalRate = globalRate;
  }
}
