import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariozService } from './usuarioz.service';
import { CreateUsuariozDto } from './dto/create-usuarioz.dto';
import { UpdateUsuariozDto } from './dto/update-usuarioz.dto';

@Controller('usuarioz')
export class UsuariozController {
  constructor(private readonly usuariozService: UsuariozService) {}

  @Post()
  create(@Body() createUsuariozDto: CreateUsuariozDto) {
    return this.usuariozService.create(createUsuariozDto);
  }

  @Get()
  findAll() {
    return this.usuariozService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariozService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuariozDto: UpdateUsuariozDto) {
    return this.usuariozService.update(+id, updateUsuariozDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariozService.remove(+id);
  }
}
