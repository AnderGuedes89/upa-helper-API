import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
} from 'sequelize-typescript';
import { User } from 'src/modules/administrative/users/user.entity';
import { Attendance } from '../attendances/attendance.entity';
import { Triage } from '../triages/triage.entity';

@Table
export class Appointment extends Model {
  @PrimaryKey
  @Column({
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(11),
    allowNull: false,
  })
  bloodPressure: string;

  @Column({
    type: DataType.STRING(8),
    allowNull: false,
  })
  temperature: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  appointmentDate: Date;

  @ForeignKey(() => Attendance)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  attendanceId: number;

  @BelongsTo(() => Attendance)
  attendance: Attendance;

  @ForeignKey(() => Triage)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  triageId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;
}
