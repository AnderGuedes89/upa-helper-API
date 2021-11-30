import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';
import { Attendance } from 'src/modules/medical-care/attendances/attendance.entity';

@Table
export class AttendanceStatus extends Model {
  @PrimaryKey
  @Column({
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  label: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @HasMany(() => Attendance)
  attendance?: Attendance[];
}
