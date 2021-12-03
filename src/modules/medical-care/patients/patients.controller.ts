import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DoesPatientExist } from 'src/core/guards/doesPatientExist.guard';
import { PatientDto } from './dto/patient.dto';
import { Patient } from './patient.entity';
import { PatientsService } from './patients.service';

@UseGuards(AuthGuard('jwt'))
@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @UseGuards(DoesPatientExist)
  @Post()
  async createPatient(@Body() patient: PatientDto): Promise<Patient> {
    return await this.patientsService.createPatient(patient);
  }

  @Get('table')
  async getPatientsForTable() {
    return await this.patientsService.getPatientsForTable();
  }

  @Get(':id')
  async getPatientById(@Param('id') id: number): Promise<Patient> {
    const patient = await this.patientsService.getPatientById(id);

    if (!patient) {
      throw new NotFoundException('Esse paciente não existe');
    }

    return patient;
  }

  @Put(':id')
  async updatePatient(
    @Param('id') id: number,
    @Body() patient: PatientDto,
  ): Promise<Patient> {
    const { numberOfAffectedRows, updatedPatient }: any =
      await this.patientsService.updatePatient(id, patient);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException('Esse paciente não existe');
    }

    return updatedPatient;
  }
}
