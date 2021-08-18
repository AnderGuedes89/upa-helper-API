import { Test, TestingModule } from '@nestjs/testing';
import { TriagesController } from './triages.controller';

describe('TriagesController', () => {
  let controller: TriagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TriagesController],
    }).compile();

    controller = module.get<TriagesController>(TriagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
