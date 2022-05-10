import {AddressDtoModel} from "../AddressDto.model";
import {UserDtoModel} from "../UserDto.model";
import {AnnouncementType} from "../../../enums/announcement-type";
import {AnnouncementStatus} from "../../../enums/announcement-status";

export class MyAnnouncementResponseModel {

  announcementId:number;
  announcementTitle:string;

  announcementCreatedDate:Date;
  announcementEndAvailableDate:Date;

  announcementNumberLike:number = 0;
  announcementNumberDislike:number = 0;

  announcementType:AnnouncementType;

  announcementAddress:AddressDtoModel;

  announcementBedNumber:number;
  announcementRoomNumber:number;
  announcementBathRoomNumber:number;

  globalRate:number = 0.0;
  announcementCost:number;

  announcementOwnerPublished:UserDtoModel;
  announcementMainPictureUrl:string;

  announcementStatus:AnnouncementStatus;


  constructor(announcementId: number, announcementTitle: string, announcementCreatedDate: Date,announcementEndAvailableDate:Date,
              announcementNumberLike: number, announcementNumberDislike: number, announcementType: AnnouncementType,
              announcementAddress: AddressDtoModel, announcementBedNumber: number, announcementRoomNumber: number,
              announcementBathRoomNumber: number, globalRate: number, announcementCost: number,
              announcementOwnerPublished: UserDtoModel, announcementMainPictureUrl: string, announcementStatus:AnnouncementStatus) {
    this.announcementId = announcementId;
    this.announcementTitle = announcementTitle;
    this.announcementCreatedDate = announcementCreatedDate;
    this.announcementEndAvailableDate= announcementEndAvailableDate;
    this.announcementNumberLike = announcementNumberLike;
    this.announcementNumberDislike = announcementNumberDislike;
    this.announcementType = announcementType;
    this.announcementAddress = announcementAddress;
    this.announcementBedNumber = announcementBedNumber;
    this.announcementRoomNumber = announcementRoomNumber;
    this.announcementBathRoomNumber = announcementBathRoomNumber;
    this.globalRate = globalRate;
    this.announcementCost = announcementCost;
    this.announcementOwnerPublished = announcementOwnerPublished;
    this.announcementMainPictureUrl = announcementMainPictureUrl;
    this.announcementStatus=announcementStatus;
  }
}
