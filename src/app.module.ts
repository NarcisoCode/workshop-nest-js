import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageController } from './message/message.controller';
import { DatabaseModule } from './database/database.module';
import { MessageService } from './message/message/message.service';
import { MessageService } from './message/message.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, MessageController],
  providers: [AppService, MessageService],
})
export class AppModule {}
