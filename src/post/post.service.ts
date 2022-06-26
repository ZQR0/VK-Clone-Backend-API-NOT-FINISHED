import { Repository, DeleteResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { PostEntity } from "src/entities";
import { PostDTO } from "./post.dto";
import { UserService } from "src/user";

@Injectable()
export class PostService {

    constructor(
        private postDTO: PostDTO,
        private userService: UserService,
        
        @InjectRepository(PostEntity)
        private postRepository: Repository<PostEntity>
    ) {

    }

    public async getTest() {
        return {
            message: "Test Passed"
        }
    }

    public async getAllPosts(): Promise<PostEntity[]> {
        return await this.postRepository.find();
    }

    public async getPostById(id: number) {
        const post = await this.postRepository.findOne({
            where: {id}
        });
        
        if (!post) {
            throw new NotFoundException({
                message: 'No post with this ID'
            })
        }

        return post;
    }

    public async createPost(userId: number, { content, image, timeCreated }: PostDTO): Promise<PostEntity> {

        const post = await new PostEntity();
        const user = await this.userService.findById(userId);

        post.content = content;
        post.timeCreated = timeCreated;
        post.image = image;
        post.creator = user;

        return await this.postRepository.save(post);
    };

    public async deletePost(id: number): Promise<DeleteResult> {
        const post = await this.getPostById(id)

        if (!post) {
            throw new NotFoundException({
                message: "Post not found",
            });
        }

        return await this.postRepository.delete(id);
    }


}