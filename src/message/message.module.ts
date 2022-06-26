import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from 'src/entities';
import { MessageDTO } from './message.dto';
import { MessageService } from './message.service';
import { UserModule } from 'src/user';
import { MessageController } from './message.controller';

@Module({
    imports: [TypeOrmModule.forFeature([MessageEntity]), UserModule],
    providers: [MessageDTO, MessageEntity, MessageService],
    controllers: [MessageController],
    exports: [MessageDTO, MessageEntity, MessageService]
})
export class MessageModule {}
