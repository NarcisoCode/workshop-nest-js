import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageEntity } from './message.entity';
import { Repository } from 'typeorm';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class MessageService {
    constructor(@InjectRepository(MessageEntity) private readonly messageRepository: Repository<MessageEntity>) {
    }
    async getAll(): Promise<MessageEntity[]> {
        return await this.messageRepository.find();
    }
    async createMessage(messageNew: MessageDto): Promise<MessageEntity> {
        const item = new MessageEntity();
        item.message = messageNew.message;
        item.nick = messageNew.nick;
        return this.messageRepository.save(item)
    }
    async updateMessage(idMessage: number, messageUpdate: MessageDto): Promise<MessageEntity> {
        const itemOld = await this.messageRepository.findOne(idMessage);
        itemOld.nick = messageUpdate.nick;
        itemOld.message = messageUpdate.message;
        const itemUpdate = itemOld
        return this.messageRepository.save(itemUpdate)
    }
    async deleteMessage(idMessage: number): Promise<any> {
        return await this.messageRepository.delete(idMessage)
    }
}
