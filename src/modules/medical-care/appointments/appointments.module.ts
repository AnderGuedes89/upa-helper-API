import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { appointmentsProviders } from './appointments.providers';
import { AttendancesModule } from '../attendances/attendances.module';

@Module({
  providers: [AppointmentsService, ...appointmentsProviders],
  controllers: [AppointmentsController],
  imports: [AttendancesModule],
})
export class AppointmentsModule {}
