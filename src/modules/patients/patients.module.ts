import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { patientsProviders } from './patients.providers';

@Module({
  providers: [PatientsService, ...patientsProviders],
  controllers: [PatientsController],
})
export class PatientsModule {}
