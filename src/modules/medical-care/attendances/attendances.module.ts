import { Module } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { AttendancesController } from './attendances.controller';
import { attendancesProviders } from './attendances.providers';

@Module({
  providers: [AttendancesService, ...attendancesProviders],
  controllers: [AttendancesController],
})
export class AttendancesModule {}
