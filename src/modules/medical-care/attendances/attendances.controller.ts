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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Attendance } from './attendance.entity';
import { AttendancesService } from './attendances.service';
import { AttendanceDto } from './dto/attendance.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('attendances')
@ApiTags('Attendances')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

  @Post()
  @ApiOperation({ summary: 'Abre um novo Atendimento' })
  async createAttendance(
    @Body() attendance: AttendanceDto,
  ): Promise<Attendance> {
    return await this.attendancesService.createAttendance(attendance);
  }

  @Get('table/opened')
  @ApiOperation({ summary: 'Lista os Atendimentos independente do seu status' })
  async getAttendancesOpenedForTable() {
    return await this.attendancesService.getAttendancesOpenedForTable();
  }

  @Get('table/completed')
  @ApiOperation({
    summary: 'Lista os Atendimentos com status "Atendimento Concluído"',
  })
  async getAttendancesCompletedForTable() {
    return await this.attendancesService.getAttendancesCompletedForTable();
  }

  @Get('table/triage')
  @ApiOperation({
    summary: 'Lista os Atendimentos com status "Aguardando Triagem"',
  })
  async getAttendancesForTriageForTable() {
    return await this.attendancesService.getAttendancesForTriageForTable();
  }

  @Get('table/appointment')
  @ApiOperation({
    summary: 'Lista os Atendimentos com status "Aguardando Consulta"',
  })
  async getAttendancesForAppointmentForTable() {
    return await this.attendancesService.getAttendancesForAppointmentForTable();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um Atendimento especifico' })
  async getAttendanceById(@Param('id') id: number): Promise<Attendance> {
    const attendance = await this.attendancesService.getAttendanceById(id);

    if (!attendance) {
      throw new NotFoundException('Esse atendimento não existe');
    }

    return attendance;
  }
}
