import {AddressDtoModel} from "../AddressDto.model";
import {UserDtoModel} from "../UserDto.model";
import {AnnouncementType} from "../../../enums/announcement-type";

export class AnnouncementResponseModel {

  announcementId:number;
  announcementTitle:string;

  announcementCreatedDate:Date;

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


  constructor(announcementId: number, announcementTitle: string, announcementCreatedDate: Date,
              announcementNumberLike: number, announcementNumberDislike: number, announcementType: AnnouncementType,
              announcementAddress: AddressDtoModel, announcementBedNumber: number, announcementRoomNumber: number,
              announcementBathRoomNumber: number, globalRate: number, announcementCost: number,
              announcementOwnerPublished: UserDtoModel, announcementMainPictureUrl: string) {
    this.announcementId = announcementId;
    this.announcementTitle = announcementTitle;
    this.announcementCreatedDate = announcementCreatedDate;
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
  }
}
