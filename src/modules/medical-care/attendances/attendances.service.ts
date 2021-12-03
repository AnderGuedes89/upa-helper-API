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

  async createAttendance(attendance: AttendanceDto): Promise<Attendance> {
    return await this.attendanceRepository.create<Attendance>(attendance);
  }

  async getAttendancesOpenedForTable(): Promise<any[]> {
    const allAttendance = await this.attendanceRepository.findAll<Attendance>({
      include: ['patient', 'status'],
      where: { statusId: { $not: 6 } },
    });
    const attendanceOpened = allAttendance.map((a) => ({
      id: a.id,
      patientAge: a.patientAge + ' Anos',
      date: a.arrivalDate,
      patientName: a.patient.name,
      attendanceStatus: a.status.label,
    }));
    return attendanceOpened;
  }

  async getAttendancesCompletedForTable(): Promise<any[]> {
    const allAttendance = await this.attendanceRepository.findAll<Attendance>({
      include: ['patient', 'status'],
      where: { statusId: 6 },
    });
    const attendanceCompleted = allAttendance.map((a) => ({
      id: a.id,
      patientAge: a.patientAge + ' Anos',
      date: a.arrivalDate,
      patientName: a.patient.name,
      patientId: a.patient.id,
    }));
    return attendanceCompleted;
  }

  async getAttendanceById(id: number): Promise<Attendance> {
    return await this.attendanceRepository.findOne({
      where: { id },
      include: ['patient', 'status'],
    });
  }
}
