import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';

@Controller('message')
export class MessageController {
    @Post()
    create(@Body() createMessageDto: MessageDto) {
        return 'Mensaje creado'
    }
    @Get()
    getAll() {
        return 'Listado de mensajes'
    }
    @Put(':id')
    update(@Body() updateMessageDto: MessageDto) {
        return 'Mensaje actualizado'
    }
    @Delete(':id')
    delete() {
        return 'Mensaje eliminado'
    }
}
