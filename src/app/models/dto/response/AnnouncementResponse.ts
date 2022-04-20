import {AddressDto} from "../AddressDto";
import {UserDto} from "../UserDto";

export class AnnouncementResponse {

  announcementId:number;
  announcementTitle:string;

  announcementCreatedDate:Date;

  announcementNumberLike:number = 0;
  announcementNumberDislike:number = 0;

  announcementType:string;

  announcementAddress:AddressDto;

  announcementBedNumber:number;
  announcementRoomNumber:number;
  announcementBathRoomNumber:number;

  globalRate:number = 0.0;
  announcementCost:number;

  announcementOwnerPublished:UserDto;
  announcementMainPictureUrl:string;


  constructor(announcementId: number, announcementTitle: string, announcementCreatedDate: Date,
              announcementNumberLike: number, announcementNumberDislike: number, announcementType: string,
              announcementAddress: AddressDto, announcementBedNumber: number, announcementRoomNumber: number,
              announcementBathRoomNumber: number, globalRate: number, announcementCost: number,
              announcementOwnerPublished: UserDto, announcementMainPictureUrl: string) {
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
