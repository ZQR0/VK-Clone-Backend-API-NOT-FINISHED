import { IsString, IsDate, IsObject} from "class-validator";

export class MessageDTO {

    @IsString()
    content: string;

    @IsDate()
    timeCreated: Date;

    @IsObject()
    conversationId: any;

    @IsObject()
    userToId: any;

}