import { Module } from '@nestjs/common';
import { UsuariozService } from './usuarioz.service';
import { UsuariozController } from './usuarioz.controller';

@Module({
  controllers: [UsuariozController],
  providers: [UsuariozService]
})
export class UsuariozModule {}
