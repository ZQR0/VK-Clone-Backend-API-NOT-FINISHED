import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogLikesEntity } from 'src/entities';
import { LogLikesDTO } from './log-likes.dto';
import { LogLikesService } from './log-likes.service';
import { UserModule } from 'src/user';
import { LogLikesController } from './log-likes.contoller';
import { PostModule } from 'src/post/post.module';

@Module({
    imports: [TypeOrmModule.forFeature([LogLikesEntity]), UserModule, PostModule],
    providers: [LogLikesService, LogLikesEntity, LogLikesDTO],
    controllers: [LogLikesController],
    exports: [],
})
export class LogLikesModule {}
