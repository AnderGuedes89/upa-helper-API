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

@Table
export class Appointment extends Model {
  @PrimaryKey
  @Column({
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  diagnosis: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  prescription: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  cid: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  exitData: string;

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

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;
}
