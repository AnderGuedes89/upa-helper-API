import {
  Body,
  Controller,
  Delete,
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
  async create(@Body() patient: PatientDto): Promise<Patient> {
    return await this.patientsService.create(patient);
  }

  @Get()
  async findAll() {
    return await this.patientsService.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') id: number): Promise<Patient> {
    const post = await this.patientsService.findOneById(id);

    if (!post) {
      throw new NotFoundException('Esse paciente não existe');
    }

    return post;
  }
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() patient: PatientDto,
  ): Promise<Patient> {
    const { numberOfAffectedRows, updatedPatient }: any =
      await this.patientsService.update(id, patient);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException('Esse paciente não existe');
    }

    return updatedPatient;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleted = await this.patientsService.delete(id);

    if (deleted === 0) {
      throw new NotFoundException('Esse paciente não existe');
    }

    return 'Excluído com sucesso';
  }
}
