import { Module } from '@nestjs/common';
import { ConvService } from './conversation.service';
import { ConvDTO } from './conversation.dto';
import { ConversationContoller } from './conversation.controller';
import { MessageModule } from 'src/message';
import { ConvEntity } from 'src/entities/conversation.entity';

@Module({
    imports: [MessageModule],
    providers: [ConvService, ConvDTO, ConvEntity],
    controllers: [ConversationContoller],
    exports: [ConvService, ConvDTO, ConvEntity]
})
export class ConversationModule {}
