import { Test, TestingModule } from '@nestjs/testing';
import { UsuariozService } from './usuarioz.service';

describe('UsuariozService', () => {
  let service: UsuariozService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariozService],
    }).compile();

    service = module.get<UsuariozService>(UsuariozService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
