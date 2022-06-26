import { IsString, IsDate } from "class-validator";

export class PostDTO {
    @IsString()
    content: string;

    @IsString()
    image?: string;

    @IsDate()
    timeCreated: Date;
}