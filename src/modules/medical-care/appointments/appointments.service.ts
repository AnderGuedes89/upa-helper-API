import { Inject, Injectable } from '@nestjs/common';
import {
  APPOINTMENT_REPOSITORY,
  ATTENDANCE_REPOSITORY,
} from 'src/core/constants';
import { Attendance } from '../attendances/attendance.entity';
import { Appointment } from './appointment.entity';
import { AppointmentDto } from './dto/appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    @Inject(APPOINTMENT_REPOSITORY)
    private readonly appointmentRepository: typeof Appointment,
    @Inject(ATTENDANCE_REPOSITORY)
    private readonly attendanceRepository: typeof Attendance,
  ) {}

  async createAppointment(appointment: AppointmentDto): Promise<Appointment> {
    const attendanceId = appointment.attendanceId;
    const attendance = await this.attendanceRepository.findOne({
      where: { id: attendanceId },
    });

    delete attendance.id;
    delete attendance.statusId;
    const newStatusId = 6;

    await this.attendanceRepository.update(
      { ...attendance, statusId: newStatusId },
      { where: { id: attendanceId } },
    );

    return await this.appointmentRepository.create<Appointment>(appointment);
  }

  async getAppointmentById(id: number): Promise<Appointment> {
    return await this.appointmentRepository.findOne({ where: { id } });
  }
}
