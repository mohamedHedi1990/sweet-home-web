import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from "../../../services/announcement.service";
import {AnnouncementResponseModel} from "../../../models/dto/response/AnnouncementResponse.model";
import {AnnouncementStatus} from "../../../enums/announcement-status";
import {NgbActiveModal, NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {MyAnnouncementResponseModel} from "../../../models/dto/response/MyAnnouncementResponse.model";

@Component({
  selector: 'app-announcement-user',
  templateUrl: './announcement-user.component.html',
  styleUrls: ['./announcement-user.component.scss'],
  providers: [NgbModalConfig, NgbModal, NgbActiveModal]
})
export class AnnouncementUserComponent implements OnInit {

  page :number= 1;
  pageSize: number= 4;
  collectionSize:number = 0;
  myAnnouncementResponseModels: MyAnnouncementResponseModel[]=[];

  // @ts-ignore
  announcementToDelete: AnnouncementResponseModel;

  constructor(private announcementService:AnnouncementService, config: NgbModalConfig,
              private modalService: NgbModal, private toastr: ToastrService) {

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {

    this.refreshAnnouncements()

  }

  refreshAnnouncements() {
    this.announcementService.myAnnouncements().subscribe(res =>{
      this.collectionSize= res.length;
      this.myAnnouncementResponseModels = res
        .map((announcement, i) => ({id: i + 1, ...announcement}))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

    })

  }

  getAnnouncementStatus(announcementStatus: AnnouncementStatus):string {
    const status = announcementStatus.toString();
    return AnnouncementStatus[status as keyof typeof AnnouncementStatus];

  }

  onViewAnnouncement(announcementId: number) {
     window.open("/annoucement-details/"+announcementId);
  }

  onEditAnnouncement() {

  }

  onDeleteAnnouncement(content:any, announcementResponseModel:AnnouncementResponseModel) {
      this.announcementToDelete=announcementResponseModel;
      this.modalService.open(content, {centered :true});
  }

  onConfirmDelete(announcementToDelete: AnnouncementResponseModel) {
    this.announcementService.deleteAnnouncement(announcementToDelete.announcementId).subscribe(res =>{
      this.toastr.success('L\'annonce '+announcementToDelete.announcementTitle+' a été supprimée avec succès', 'Succès');
      this.refreshAnnouncements();
      this.modalService.dismissAll();
    },error => {
      this.toastr.error('Il y a un erreur lors la suppression de l\'annonce '+announcementToDelete.announcementTitle+'!!', 'Erreur');
    })
  }
}
