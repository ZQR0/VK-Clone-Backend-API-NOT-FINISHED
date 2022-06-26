import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from 'src/entities';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { CommentDTO } from './comment.dto';

@Module({
    imports: [TypeOrmModule.forFeature([CommentEntity])],
    providers: [CommentService, CommentDTO, CommentEntity],
    controllers: [CommentController],
    exports: [TypeOrmModule]
})
export class CommentModule {}
