import { Injectable } from '@nestjs/common';
import { CreateUsuariozDto } from './dto/create-usuarioz.dto';
import { UpdateUsuariozDto } from './dto/update-usuarioz.dto';

@Injectable()
export class UsuariozService {
  create(createUsuariozDto: CreateUsuariozDto) {
    return 'This action adds a new usuarioz';
  }

  findAll() {
    return `This action returns all usuarioz`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuarioz`;
  }

  update(id: number, updateUsuariozDto: UpdateUsuariozDto) {
    return `This action updates a #${id} usuarioz`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuarioz`;
  }
}
