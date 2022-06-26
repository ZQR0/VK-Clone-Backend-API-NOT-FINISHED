import { BaseEntityEx } from "./base.entity";
import { Entity, Column, OneToMany, JoinColumn, PrimaryColumn, JoinTable } from 'typeorm';
import { UserEntity } from "./user.entity";

@Entity()
export class PostEntity extends BaseEntityEx {

    @Column()
    content: string;

    @Column({nullable: true})
    image?: string;

    @OneToMany((type) => UserEntity, (user) => user.name)
    @JoinTable({
        name: 'user_entity'
    })
    creator: UserEntity;

    @Column({
        type: Date
    })
    timeCreated: Date;

}