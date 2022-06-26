import { Entity, Column, JoinColumn, JoinTable, ManyToMany } from "typeorm";
import { MessageEntity } from "./message.entity";
import { UserEntity } from "./user.entity";
import { BaseEntityEx } from "./base.entity";

@Entity()
export class ConvEntity extends BaseEntityEx {

    @ManyToMany((type) => UserEntity, (creator) => creator.name)
    @JoinTable({
        name: 'user_entity'
    })
    creator: UserEntity;

    @ManyToMany((type) => MessageEntity, (content) => content.text)
    @JoinTable({
        name: 'message_entity'
    })
    message: MessageEntity;

}