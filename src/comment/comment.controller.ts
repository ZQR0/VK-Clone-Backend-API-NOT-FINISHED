import { Controller, Get, Post, HttpCode, UsePipes, ValidationPipe, Param, Body } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { Auth } from "src/auth/decorators/auth.decorator";
import { CommentDTO } from "./comment.dto";
import { CurrentUser } from "src/user/decorators/user.decorator";

@Controller('comment')
export class CommentController {
    constructor(
        private commentService: CommentService
    ) {}

    @Get('test')
    public async getTest() {
        return await this.commentService.getTest();
    }

    @Get('by-id/:postId')
    public async getCommentById(
        @Param('postId') postId: number
    ) {
        return await this.commentService.commentById(postId);
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('create-comment')
    @Auth()
    public async createComment(
        @Body() dto: CommentDTO,
        @CurrentUser('id') id: number
    ) {
        return await this.commentService.createComment(dto)
    }

}