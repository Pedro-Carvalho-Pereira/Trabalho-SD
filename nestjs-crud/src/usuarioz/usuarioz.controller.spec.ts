import { Test, TestingModule } from '@nestjs/testing';
import { UsuariozController } from './usuarioz.controller';
import { UsuariozService } from './usuarioz.service';

describe('UsuariozController', () => {
  let controller: UsuariozController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariozController],
      providers: [UsuariozService],
    }).compile();

    controller = module.get<UsuariozController>(UsuariozController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
