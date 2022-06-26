import { Controller, Get, Post, HttpCode, UsePipes, ValidationPipe, Param, Body } from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import { CurrentUser } from "src/user/decorators/user.decorator";
import { LogLikesDTO } from "./log-likes.dto";
import { LogLikesService } from "./log-likes.service";

@Controller('likes')
export class LogLikesController {

    constructor(
        private logLikesService: LogLikesService
    ) {}

    @Get('test')
    public async getTest() {
        return await this.logLikesService.getTest();
    }

    

}