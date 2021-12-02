import { Module } from '@nestjs/common';
import { TriagesService } from './triages.service';
import { TriagesController } from './triages.controller';
import { triagesProviders } from './triages.providers';
import { AttendancesModule } from '../attendances/attendances.module';

@Module({
  providers: [TriagesService, ...triagesProviders],
  controllers: [TriagesController],
  imports: [AttendancesModule],
})
export class TriagesModule {}
