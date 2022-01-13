import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Appointment } from './appointment.entity';
import { AppointmentsService } from './appointments.service';
import { AppointmentDto } from './dto/appointment.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('appointments')
@ApiTags('Appointment')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra uma Consulta' })
  async createAppointment(
    @Body() appointment: AppointmentDto,
  ): Promise<Appointment> {
    return await this.appointmentsService.createAppointment(appointment);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna uma Consulta especifica' })
  async getAppointmentById(@Param('id') id: number): Promise<Appointment> {
    const appointment = await this.appointmentsService.getAppointmentById(id);

    if (!appointment) {
      throw new NotFoundException('Essa consulta não existe');
    }

    return appointment;
  }
}
