
import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async cadastrar(data: UsuarioCadastrarDto): Promise<ResultadoDto>{
    
    let usuario = new Usuario()
    usuario.name = data.name
    usuario.cost = data.cost
    usuario.category = data.category
    return await this.usuarioRepository.save(usuario)
    .then((result) => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Produto cadastrado"
      }
    })
    .catch((error) => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Erro ao cadastrar produto"
      }
    })
  }

  async atualizar(usuario: Usuario, id: number): Promise<ResultadoDto>{
    return this.usuarioRepository.update(id,usuario).then((result) => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Produto atualizado"
      }
    })
    .catch((error) => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Erro ao atualizar produto"
      }
    })
  }

  async deletar(name: string): Promise<ResultadoDto>{
    return this.usuarioRepository.delete(name).then((result) => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Produto deletado"
      }
    })
    .catch((error) => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Erro ao deletar produto"
      }
    })
  }
}
