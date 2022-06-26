import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository, DeleteResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { MessageDTO } from './message.dto';
import { MessageEntity, UserEntity } from "src/entities";

@Injectable()
export class MessageService {
    constructor(
        private messageDTO: MessageDTO,

        @InjectRepository(MessageEntity)
        private messageRepository: Repository<MessageEntity>
    ) {}

    public async ByUserFromId(userFrom: any): Promise<MessageEntity[]> {
        return await this.messageRepository.find({
            where: {userFrom}
        })
    }

    public async ByUserToId(userTo: any, userFrom: any): Promise<MessageEntity[]> {
        return await this.messageRepository.find({
            where: {userTo, userFrom}
        })
    }

    public async createMessage(userFromId: UserEntity, { content, timeCreated }: MessageDTO) {
        const message = new MessageEntity();
        message.text = content;
        message.timeCreated = timeCreated;
        message.userFrom = userFromId;

        return await this.messageRepository.save(message);
    }

    public async findMessageById(id: number) {
        const message = await this.messageRepository.findOne({
            where: {id}
        })

        if (!message) throw new NotFoundException();

        return message;
    }

    public async deleteMessage(id: number): Promise<DeleteResult> {
        const message = await this.findMessageById(id)

        return await this.messageRepository.delete(id);
    }

}