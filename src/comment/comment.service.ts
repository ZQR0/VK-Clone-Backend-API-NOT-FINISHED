import { Repository, DeleteResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CommentEntity, UserEntity } from "src/entities";
import { CommentDTO } from "./comment.dto";

@Injectable()
export class CommentService {

    constructor(
        private commentDTO: CommentDTO,
        private commentEntity: CommentEntity,

        @InjectRepository(CommentEntity)
        private commentRepository: Repository<CommentEntity>
    ) {}

    public async getTest() {
        return {
            message: "Test Passed",
        }
    }

    public async commentById(id: number): Promise<CommentEntity> {
        const post = await this.commentRepository.findOne({
            where: {id}
        });

        if (!post) {
            throw new NotFoundException({
                message: "No comment with this ID"
            })
        }

        return post;
    }

    public async createComment(dto: CommentDTO) {
        const post = await new CommentEntity();

        post.content = dto.message;

        return await this.commentRepository.save(post);

    }

    public async destroy(id: number): Promise<DeleteResult> {
        return await this.commentRepository.delete(id);
    }

}