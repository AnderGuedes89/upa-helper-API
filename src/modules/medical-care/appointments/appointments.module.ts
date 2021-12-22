import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { appointmentsProviders } from './appointments.providers';

@Module({
  providers: [AppointmentsService, ...appointmentsProviders],
  controllers: [AppointmentsController],
})
export class AppointmentsModule {}
