import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('tarefas')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}


  @Get('')
  async listar() : Promise<Usuario[]>{
      return this.usuarioService.listar()
  }

  @Get('TarefaEspecifica')
  async retornarTarefa(@Body() id: number) : Promise<Usuario[]>{
      return this.usuarioService.retornarTarefa(id)
  }

  @Post('')
  async cadastrar(@Body() data: UsuarioCadastrarDto) : Promise<ResultadoDto>{
    return this.usuarioService.cadastrar(data)
  }

  @Put('atualizar')
  async atualizar(@Body() usuario: Usuario) : Promise<ResultadoDto>{
    return this.usuarioService.atualizar(usuario,usuario.id);
  }

  @Delete('deletar')
  async deletar(@Body() descricao: string) : Promise<ResultadoDto>{
    return this.usuarioService.deletar(descricao);
  }
}