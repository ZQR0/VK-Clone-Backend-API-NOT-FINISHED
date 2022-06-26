import { BaseEntityEx } from "./base.entity";
import { Entity, Column, OneToMany, JoinColumn, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import { PostEntity } from "./post.entity";
import { UserEntity } from "./user.entity";

@Entity()
export class LogLikesEntity extends BaseEntityEx{

    @ManyToMany((type) => PostEntity, (post) => post.id)
    @JoinColumn({
        name: 'id',
        referencedColumnName: 'id'
    })
    post: PostEntity;

    @ManyToMany((type) => UserEntity, (user) => user.name)
    @JoinColumn({
        name: 'name',
        referencedColumnName: 'name'
    })
    user: UserEntity;

}