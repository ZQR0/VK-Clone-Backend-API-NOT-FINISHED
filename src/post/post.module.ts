import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from 'src/entities';
import { PostDTO } from './post.dto';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { UserModule } from 'src/user';

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity]), UserModule],
    providers: [PostEntity, PostService, PostDTO],
    controllers: [PostController],
    exports: [PostEntity, PostService, PostDTO]
})
export class PostModule {}
