import { IsString, IsObject } from "class-validator";

export class LogLikesDTO {

    @IsObject()
    postId: string;

}