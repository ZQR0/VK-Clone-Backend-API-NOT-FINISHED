import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository, DeleteResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { MessageEntity } from "src/entities";
import { MessageDTO } from "src/message";
import { MessageService } from "src/message";

@Injectable()
export class ConvService {
    constructor(
        private messageService: MessageService
    ) {}

    public async getTest() {
        return "Test passed"
    }


    public async create(userFromId: any, { content, timeCreated, userToId, conversationId  }: MessageDTO) {
        return await this.messageService.createMessage(userToId, userFromId);
    }

    public async delete(id: number) {
        return await this.messageService.deleteMessage(id)
    }
}