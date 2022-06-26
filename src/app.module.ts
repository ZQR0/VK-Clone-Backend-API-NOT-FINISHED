import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseEntityEx } from './entities/base.entity';
import { UserEntity } from './entities/user.entity';
import { MessageModule } from './message/message.module';
import { LogLikesModule } from './log-likes/log-likes.module';
import { ConversationModule } from './conversation/conversation.module';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { LogLikesEntity } from './entities';
import { CommentEntity } from './entities';
import { MessageEntity } from './entities';
import { PostEntity } from './entities';
import { ConvEntity } from './entities/conversation.entity';

@Module({
  imports: [
    AuthModule,
    UserModule,
    MessageModule,
    LogLikesModule,
    ConversationModule,
    CommentModule,
    PostModule,

    // Database setup config
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: "Htxrfkjd1",
      database: 'VK',
      entities: [
        BaseEntityEx,
        UserEntity,
        LogLikesEntity,
        CommentEntity,
        MessageEntity,
        PostEntity,
        ConvEntity
      ],
      synchronize: true,
      })
    }),
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}