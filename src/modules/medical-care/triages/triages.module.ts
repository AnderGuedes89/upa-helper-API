import { Module } from '@nestjs/common';
import { TriagesService } from './triages.service';
import { TriagesController } from './triages.controller';
import { triagesProviders } from './triages.providers';

@Module({
  providers: [TriagesService, ...triagesProviders],
  controllers: [TriagesController],
})
export class TriagesModule {}
