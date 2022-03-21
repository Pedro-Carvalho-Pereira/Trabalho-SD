import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}


  @Get('listar')
  async listar() : Promise<Usuario[]>{
      return this.usuarioService.listar()
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: UsuarioCadastrarDto) : Promise<ResultadoDto>{
    return this.usuarioService.cadastrar(data)
  }

  @Put('atualizar')
  async atualizar(@Body() usuario: Usuario) : Promise<ResultadoDto>{
    return this.usuarioService.atualizar(usuario,usuario.id);
  }

  @Delete('deletar')
  async deletar(@Body() name: string) : Promise<ResultadoDto>{
    return this.usuarioService.deletar(name);
  }
}