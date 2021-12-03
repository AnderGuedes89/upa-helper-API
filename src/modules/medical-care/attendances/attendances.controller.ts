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
import { Attendance } from './attendance.entity';
import { AttendancesService } from './attendances.service';
import { AttendanceDto } from './dto/attendance.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('attendances')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

  @Post()
  async createAttendance(
    @Body() attendance: AttendanceDto,
  ): Promise<Attendance> {
    return await this.attendancesService.createAttendance(attendance);
  }

  @Get('table/opened')
  async getAttendancesOpenedForTable() {
    return await this.attendancesService.getAttendancesOpenedForTable();
  }

  @Get('table/completed')
  async getAttendancesCompletedForTable() {
    return await this.attendancesService.getAttendancesCompletedForTable();
  }

  @Get(':id')
  async getAttendanceById(@Param('id') id: number): Promise<Attendance> {
    const attendance = await this.attendancesService.getAttendanceById(id);

    if (!attendance) {
      throw new NotFoundException('Esse atendimento não existe');
    }

    return attendance;
  }
}
