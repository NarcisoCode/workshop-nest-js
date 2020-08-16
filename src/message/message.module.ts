import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from './message.entity';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';

@Module({
    imports: [TypeOrmModule.forFeature([MessageEntity])],
    controllers: [MessageController],
    providers: [MessageService]
})
export class MessageModule {}
