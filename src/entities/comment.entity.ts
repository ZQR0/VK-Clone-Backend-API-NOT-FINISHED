import { Column, Entity, OneToMany, JoinColumn, ManyToOne, JoinTable } from "typeorm";
import { UserEntity } from "./user.entity";
import { PostEntity } from "./post.entity";
import { BaseEntityEx } from "./base.entity";

@Entity()
export class CommentEntity extends BaseEntityEx {

    @Column()
    content: string;

    @OneToMany((type) => UserEntity, (user) => user.name)
    @JoinColumn({
        name: 'name',
        referencedColumnName: 'name',
    })
    creator: UserEntity;

    @ManyToOne((type) => PostEntity, (post) => post.id)
    @JoinColumn({
        name: 'id',
        referencedColumnName: 'id',
    })
    post: PostEntity;

    @Column({
        type: Date,
    })
    timeCreated: Date;
}