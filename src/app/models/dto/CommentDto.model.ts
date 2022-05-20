import {UserDtoModel} from "./UserDto.model";

export class CommentDtoModel {

   public commentText:string;
   public writer:UserDtoModel;


  constructor(commentText: string, writer: UserDtoModel) {
    this.commentText = commentText;
    this.writer = writer;
  }
}
