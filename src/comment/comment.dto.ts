import { IsString, IsObject, IsDate } from "class-validator";

export class CommentDTO {

    @IsString()
    message: string;

    @IsObject()
    postId: string;

    @IsDate()
    timeCreated: Date;

}