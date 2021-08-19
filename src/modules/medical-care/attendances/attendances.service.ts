import { Inject, Injectable } from '@nestjs/common';
import { ATTENDANCE_REPOSITORY } from 'src/core/constants';
import { Attendance } from './attendance.entity';
import { AttendanceDto } from './dto/attendance.dto';

@Injectable()
export class AttendancesService {
  constructor(
    @Inject(ATTENDANCE_REPOSITORY)
    private readonly attendanceRepository: typeof Attendance,
  ) {}

  async create(attendance: AttendanceDto): Promise<Attendance> {
    return await this.attendanceRepository.create<Attendance>(attendance);
  }

  async findAll(): Promise<Attendance[]> {
    return await this.attendanceRepository.findAll<Attendance>();
  }

  async findOne(id: number): Promise<Attendance> {
    return await this.attendanceRepository.findOne({ where: { id } });
  }

  async delete(id: number) {
    return await this.attendanceRepository.destroy({ where: { id } });
  }

  async update(id: number, data: AttendanceDto) {
    const [numberOfAffectedRows, [updatedAttendance]] =
      await this.attendanceRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedAttendance };
  }
}
