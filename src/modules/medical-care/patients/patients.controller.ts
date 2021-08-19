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
import { PatientDto } from './dto/patient.dto';
import { Patient } from './patient.entity';
import { PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() patient: PatientDto): Promise<Patient> {
    return await this.patientsService.create(patient);
  }

  @Get()
  async findAll() {
    return await this.patientsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Patient> {
    const post = await this.patientsService.findOne(id);

    if (!post) {
      throw new NotFoundException('Este paciente não existe');
    }

    return post;
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() patient: PatientDto,
  ): Promise<Patient> {
    const { numberOfAffectedRows, updatedPatient }: any =
      await this.patientsService.update(id, patient);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException('Este paciente não existe');
    }

    return updatedPatient;
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleted = await this.patientsService.delete(id);

    if (deleted === 0) {
      throw new NotFoundException('Este paciente não existe');
    }

    return 'Excluído com sucesso';
  }
}
