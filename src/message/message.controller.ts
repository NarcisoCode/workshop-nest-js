import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(private messageService: MessageService) {
    }
    @Post()
    create(@Body() createMessageDto: MessageDto, @Res() response) {
        this.messageService.createMessage(createMessageDto).then( message => {
            response.status(HttpStatus.CREATED).json(message)
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'error en la creacion del mensaje'})
        })
    }
    @Get()
    getAll(@Res() response) {
        this.messageService.getAll().then(messageList => {
            response.status(HttpStatus.OK).json(messageList)
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'error al optener los mensajes'})
        })
    }
    @Put(':id')
    update(@Body() updateMessageDto: MessageDto, @Res() response, @Param('id') idMessage) {
        this.messageService.updateMessage(idMessage, updateMessageDto).then(message => {
            response.status(HttpStatus.OK).json(message)
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'error al modificar el mensaje'})
        })
    }
    @Delete(':id')
    delete(@Res() response, @Param('id') idMessage) {
        this.messageService.deleteMessage(idMessage).then(res => {
            response.status(HttpStatus.OK).json(res)
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'error en la eliminacion del mensaje'})
        })
    }
}
