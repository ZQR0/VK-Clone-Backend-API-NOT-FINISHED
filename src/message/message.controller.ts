import { Controller, Get, Post, HttpCode, UsePipes, ValidationPipe, Param, Body, Delete } from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import { MessageEntity } from "src/entities";
import { CurrentUser } from "src/user/decorators/user.decorator";
import { MessageDTO } from "./message.dto";
import { MessageService } from "./message.service";


@Controller('message')
export class MessageController {
    constructor(
        private messageService: MessageService
    ) {}

    @Get('conversation/:userToId')
    public async getByUserId(
        @Param('userToId') userToId: MessageEntity,
        @CurrentUser('id') userFromId: MessageEntity
    )
    {
        return await this.messageService.ByUserToId(userToId, userFromId);
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post()
    @Auth()
    public async createMessage(
        @CurrentUser('id') userId,
        @Body() dto: MessageDTO
    ) {
        return await this.messageService.createMessage(userId, dto);
    }

    @HttpCode(200)
    @Delete()
    @Auth()
    public async deleteMessage(@Param('id') id: any) {
        return await this.messageService.deleteMessage(id);
    }
}