import { Inject, Injectable } from '@nestjs/common';
import { ATTENDANCE_REPOSITORY } from 'src/core/constants';
import { CommonHelper } from 'src/core/helpers/common.helper';
import { DateHelper } from 'src/core/helpers/date.helper';
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
      where: { statusId: [1, 2, 3, 4, 5] },
    });
    const attendanceOpened = allAttendance.map((a) => ({
      id: a.id,
      patientAge: CommonHelper.formatAge(a.patientAge),
      date: DateHelper.formatDateTime(a.arrivalDate),
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
      patientAge: CommonHelper.formatAge(a.patientAge),
      date: DateHelper.formatOnlyDate(a.arrivalDate),
      patientName: a.patient.name,
      patientId: a.patient.id,
      attendanceStatus: a.status.label,
    }));
    return attendanceCompleted;
  }

  async getAttendancesForTriageForTable(): Promise<any[]> {
    const allAttendance = await this.attendanceRepository.findAll<Attendance>({
      include: ['patient', 'status'],
      where: { statusId: 1 },
    });
    const attendanceTriage = allAttendance.map((a) => ({
      id: a.id,
      patientAge: CommonHelper.formatAge(a.patientAge),
      date: DateHelper.formatDateTime(a.arrivalDate),
      patientName: a.patient.name,
      patientId: a.patient.id,
      attendanceStatus: a.status.label,
    }));
    return attendanceTriage;
  }

  async getAttendancesForAppointmentForTable(): Promise<any[]> {
    const allAttendance = await this.attendanceRepository.findAll<Attendance>({
      include: ['patient', 'status'],
      where: { statusId: [2, 3, 4, 5] },
    });
    const attendanceAppointment = allAttendance.map((a) => ({
      id: a.id,
      patientAge: CommonHelper.formatAge(a.patientAge),
      date: DateHelper.formatDateTime(a.arrivalDate),
      patientName: a.patient.name,
      patientId: a.patient.id,
      attendanceStatus: a.status.label,
    }));
    return attendanceAppointment;
  }

  async getAttendanceById(id: number): Promise<Attendance> {
    return await this.attendanceRepository.findOne({
      where: { id },
      include: ['patient', 'status'],
    });
  }
}
