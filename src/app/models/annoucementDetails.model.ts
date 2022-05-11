import {UserDtoModel} from "./dto/UserDto.model";
import { AddressDtoModel } from './dto/AddressDto.model';
import { EquipementAnouncementModel } from './equipememntAnoucement.model';

export class AnnouncementDetailsModel {
  announcementId: number;
  announcementTitle:string;
  announcementDescription:string;
  announcementCreatedDate:Date;
  announcementBedType:string;
  announcementAuthorizedExtraGuests: boolean;
  announcementSummary:string;
  announcementRules: string;
  announcementType:string;
  announcementAddress:AddressDtoModel;

  announcementBedNumber: number;
  announcementRoomNumber: number;
  announcementBathRoomNumber: number;
 
  globalRate: number = 0;
  announcementCost: number;
  
  announcementOwnerPublished:UserDtoModel;
  announcementPictureUrls: any;
  announcementEquipements: EquipementAnouncementModel [];

  announcementMinStay: number = 0;
  announcementMaxStay: number = 0;
  announcementFirstAvailableDate: Date;
  announcementEndAvailableDate: Date;
  announcementGuestNumber: number;


  
  constructor(
    announcementId: number,
    announcementTitle: string, 
    announcementDescription: string,
    announcementCreatedDate: Date,
    announcementBedType: string,
    announcementAuthorizedExtraGuests: boolean,
    announcementSummary: string,
    announcementRules: string,
    announcementType: string,
    announcementAddress:AddressDtoModel,
    announcementBedNumber: number,
    announcementRoomNumber: number,
    announcementBathRoomNumber: number,
    globalRate: number,
    announcementCost: number,
    announcementOwnerPublished:UserDtoModel,
    announcementPictureUrls: any,
    announcementEquipements: EquipementAnouncementModel [],
    announcementMinStay: number,
    announcementMaxStay: number,
    announcementFirstAvailableDate: Date,
    announcementEndAvailableDate: Date,
    announcementGuestNumber: number
  ) {
    this.announcementId = announcementId;
    this.announcementTitle = announcementTitle;
    this.announcementDescription = announcementDescription;
    this.announcementCreatedDate = announcementCreatedDate;
    this.announcementBedType = announcementBedType;
    this.announcementAuthorizedExtraGuests = announcementAuthorizedExtraGuests;
    this.announcementSummary = announcementSummary;
    this.announcementRules = announcementRules;
    this.announcementType = announcementType;
    this.announcementAddress = announcementAddress;
    this.announcementBedNumber = announcementBedNumber;
    this.announcementRoomNumber = announcementRoomNumber;
    this.announcementBathRoomNumber = announcementBathRoomNumber;
    this.globalRate = globalRate;
    this.announcementCost = announcementCost;
    this.announcementOwnerPublished = announcementOwnerPublished;
    this.announcementPictureUrls = announcementPictureUrls;
    this.announcementEquipements = announcementEquipements;
    this.announcementMinStay = announcementMinStay;
    this.announcementMaxStay = announcementMaxStay;
    this.announcementFirstAvailableDate = announcementFirstAvailableDate;
    this.announcementEndAvailableDate = announcementEndAvailableDate;
    this.announcementGuestNumber = announcementGuestNumber
  }
}
