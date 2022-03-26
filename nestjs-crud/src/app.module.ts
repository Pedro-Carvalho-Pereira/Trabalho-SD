import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuariozModule } from './usuarioz/usuarioz.module';

@Module({
  imports: [UsuarioModule, UsuariozModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
