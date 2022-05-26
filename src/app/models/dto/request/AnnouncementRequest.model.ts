import { EquipementAnouncementModel } from '../../equipememntAnoucement.model';
import { AddressRequestModel } from './AddressRequest.model';

export class AnnouncementRequestModel {

  announcementTitle:string;
  announcementDescription:string;
  announcementType:string;
  announcementAddress:AddressRequestModel;
  announcementGuestNumber: number;
  announcementBedNumber: number;
  announcementRoomNumber: number;
  announcementBathRoomNumber: number;
  announcementBedType:string;
  announcementAuthorizedExtraGuests: boolean = false;

  announcementSummary:string;
  announcementRules: string;
 
  announcementMinStay: number = 0;
  announcementMaxStay: number = 0;

  announcementFirstAvailableDate: Date;
  announcementEndAvailableDate: Date;
  announcementCost: number;


  equipments: EquipementAnouncementModel [];

  constructor(
    announcementTitle:string,
    announcementDescription:string,
    announcementType:string,
    announcementAddress:AddressRequestModel,
    announcementGuestNumber: number,
    announcementBedNumber: number,
    announcementRoomNumber: number,
    announcementBathRoomNumber: number,
    announcementBedType:string,
    announcementAuthorizedExtraGuests: boolean = false,
    announcementSummary:string,
    announcementRules: string,
    announcementMinStay: number = 0,
    announcementMaxStay: number = 0,
    announcementFirstAvailableDate: Date,
    announcementEndAvailableDate: Date,
    announcementCost: number,
    equipments: EquipementAnouncementModel [],
  
  ){
    this.announcementTitle = announcementTitle,
    this.announcementDescription = announcementDescription,
    this.announcementType = announcementType,
    this.announcementAddress = announcementAddress,
    this.announcementGuestNumber = announcementGuestNumber,
    this.announcementBedNumber = announcementBedNumber,
    this.announcementRoomNumber = announcementRoomNumber,
    this.announcementBathRoomNumber = announcementBathRoomNumber,
    this.announcementBedType = announcementBedType,
    this.announcementAuthorizedExtraGuests = announcementAuthorizedExtraGuests,
    this.announcementSummary = announcementSummary,
    this.announcementRules = announcementRules,
    this.announcementMinStay = announcementMinStay,
    this.announcementMaxStay = announcementMaxStay,
    this.announcementFirstAvailableDate = announcementFirstAvailableDate,
    this.announcementEndAvailableDate = announcementEndAvailableDate,
    this.announcementCost = announcementCost,
    this.equipments = equipments
  
  }


}
