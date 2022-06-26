import { Repository, DeleteResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { LogLikesEntity } from "src/entities";
import { LogLikesDTO } from "./log-likes.dto";
import { UserService } from "src/user";
import { PostEntity } from "src/entities";
import { PostService } from "src/post/post.service";

@Injectable()
export class LogLikesService {

    constructor(
        private logLikesDTO: LogLikesDTO,
        private userService: UserService,
        private postService: PostService,
        
        @InjectRepository(LogLikesEntity)
        private logLikesRepository: Repository<LogLikesEntity>,
    ) {}

    public async getTest() {
        return {
            message: "Test Passed",
        }
    }

    public async likeById(id: number): Promise<LogLikesEntity> {
        const like = await this.logLikesRepository.findOne({
            where: {id}
        });

        if (!like) {
            throw new NotFoundException({
                message: "No comment with this ID"
            })
        }

        return like;
    }

    public async createLike(id: number, dto: LogLikesDTO) {
        const user = await this.userService.findById(id)
        const like = await new LogLikesEntity();
        like.id = Number(dto.postId);
        like.user = user;

        return await this.logLikesRepository.save(like);
    }

    public async destroy(id: number): Promise<DeleteResult> {
        return await this.logLikesRepository.delete(id);
    }

    public async checkExists(id: number, dto: LogLikesDTO) {
        const likeExists = await this.logLikesRepository.findOne({
            where: {id}
        })
        
        if (likeExists) {
            return {
                message: 'Like exists'
            };
        };
    };

    

    public async getAllCount(id: number) {
        const post = await this.postService.getPostById(id);

        
    }
};