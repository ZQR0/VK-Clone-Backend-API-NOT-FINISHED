import { Controller, Get, Post, HttpCode, UsePipes, ValidationPipe, Param, Body, Delete } from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import { ConvService } from "./conversation.service";
import { MessageDTO } from "src/message";
import { CurrentUser } from "src/user";
import { MessageEntity } from "src/entities";

@Controller('conversation')
export class ConversationContoller {
    constructor(
        private convService: ConvService
    ) {}

    @Get('test')
    public async getTest() {
        return this.convService.getTest();
    }


    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post(':convId')
    @Auth()
    public async createConv(
        @CurrentUser('id') userId: any,
        @Param('convId') convId: any,
        @Body() dto: MessageDTO
    )
    {
        return await this.convService.create(userId, dto);
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Delete(':id')
    @Auth()
    public async deleteMessage(
        @Param('id') id: number
    )
    {
        return await this.convService.delete(id);
    }
}