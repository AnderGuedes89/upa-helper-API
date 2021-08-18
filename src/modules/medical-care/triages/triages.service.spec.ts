import { Test, TestingModule } from '@nestjs/testing';
import { TriagesService } from './triages.service';

describe('TriagesService', () => {
  let service: TriagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TriagesService],
    }).compile();

    service = module.get<TriagesService>(TriagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
