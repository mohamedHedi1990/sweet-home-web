export class EquipementAnouncementModel {
  
    equipementId:number;
    equipementLabel:string;
    equipementCode:string;
  
    constructor(equipementId: number, equipementLabel: string, equipementCode: string) {
      this.equipementId = equipementId;
      this.equipementLabel = equipementLabel;
      this.equipementCode = equipementCode;
    }
  }
  