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
import { Attendance } from './attendance.entity';
import { AttendancesService } from './attendances.service';
import { AttendanceDto } from './dto/attendance.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('attendances')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

  @Post()
  async create(@Body() attendance: AttendanceDto): Promise<Attendance> {
    return await this.attendancesService.create(attendance);
  }

  @Get()
  async findAll() {
    return await this.attendancesService.findAll();
  }

  @Get('table')
  async findAllForTable() {
    return await this.attendancesService.findAllForTable();
  }

  @Get(':id')
  async findOneById(@Param('id') id: number): Promise<Attendance> {
    const post = await this.attendancesService.findOneById(id);

    if (!post) {
      throw new NotFoundException('Esse atendimento não existe');
    }

    return post;
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() attendance: AttendanceDto,
  ): Promise<Attendance> {
    const { numberOfAffectedRows, updatedAttendance }: any =
      await this.attendancesService.update(id, attendance);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException('Esse atendimento não existe');
    }

    return updatedAttendance;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleted = await this.attendancesService.delete(id);

    if (deleted === 0) {
      throw new NotFoundException('Esse atendimento não existe');
    }

    return 'Excluído com sucesso';
  }
}
