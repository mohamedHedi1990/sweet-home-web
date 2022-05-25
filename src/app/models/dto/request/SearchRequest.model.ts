import {SearchCriteriaModel} from "../../searchCriteria.model";

export interface SearchRequestModel {

  searchCriteria:SearchCriteriaModel;
  currentPage:number;
  size:number;

}
