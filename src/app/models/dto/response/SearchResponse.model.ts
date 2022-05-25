import {AnnouncementResponseModel} from "./AnnouncementResponse.model";

export interface SearchResponseModel {

  announcementResponseList: AnnouncementResponseModel[];
  totalItems:number;

}
