import { Controller, Get, Post, HttpCode, UsePipes, ValidationPipe, Param, Body, Delete } from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import { CurrentUser } from "src/user/decorators/user.decorator";
import { PostDTO } from "./post.dto";
import { PostService } from "./post.service";

@Controller('post')
export class PostController {
    constructor(
        private postService: PostService
    ) {}

    @Get('test')
    public async getTest() {
        return await this.postService.getTest();
    }

    @HttpCode(200)
    @Get('feed')
    @Auth()
    public async getAllPosts() {
        return await this.postService.getAllPosts();
    }

    @HttpCode(200)
    @Post(':postId')
    @Auth()
    public async createLog(
        @CurrentUser('id') userid: number,
        @Body() dto: PostDTO
    ) {
        return await this.postService.createPost(userid, dto)
    }

    @HttpCode(200)
    @Delete(':id')
    @Auth()
    public async deletePost(
        @Param('id') id: number
    )
    {
        return await this.postService.deletePost(id);
    }
}