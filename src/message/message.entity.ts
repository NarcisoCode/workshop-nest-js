import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('messages')
export class MessageEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nick: string;
    @Column()
    message: string;
}
