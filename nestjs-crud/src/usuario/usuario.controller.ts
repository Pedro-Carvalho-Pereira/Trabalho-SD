import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('tarefas')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}


  @Get()
  async listar() : Promise<Usuario[]>{
      return this.usuarioService.listar()
  }

  @Get(':id')
  async retornarTarefa(@Param('id') id: string){
      return this.usuarioService.retornarTarefa(+id)
  }

  @Post('')
  async cadastrar(@Body() data: UsuarioCadastrarDto) : Promise<ResultadoDto>{
    return this.usuarioService.cadastrar(data)
  }

  @Put('/atualizar/:id')
  async atualizar(@Body() usuario: Usuario,@Param('id') id: string) {
    return this.usuarioService.atualizar(usuario,+id);
  }

  @Delete('/deletar/:id')
  async deletar(@Param('id') id: string) {
    return this.usuarioService.deletar(+id);
  }
}