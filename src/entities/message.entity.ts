import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntityEx } from "./base.entity";
import { UserEntity } from "./user.entity";

@Entity()
export class MessageEntity extends BaseEntityEx {
    @Column()
    text: string;

    @OneToMany((type) => UserEntity, (user) => user.name)
    @JoinColumn({
        name: 'name',
        referencedColumnName: 'name',
    })
    userFrom: UserEntity;

    @OneToMany((type) => UserEntity, (user) => user.name)
    @JoinColumn({
        name: 'name',
        referencedColumnName: 'name',
    })
    userTo: UserEntity;

    @Column({
        type: Date
    })
    timeCreated: Date;
}