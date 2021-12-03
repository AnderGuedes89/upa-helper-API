import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  PrimaryKey,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { AttendanceStatus } from 'src/core/entities/attendance-status.entity';
import { Patient } from '../patients/patient.entity';
import { Triage } from '../triages/triage.entity';

@Table
export class Attendance extends Model {
  @PrimaryKey
  @Column({
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(512),
    allowNull: true,
    defaultValue: null,
  })
  receptionInformation: string;

  @Column({
    type: DataType.STRING(3),
    allowNull: false,
  })
  patientAge: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  arrivalDate: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isSamu: boolean;

  @ForeignKey(() => Patient)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  patientId: number;

  @ForeignKey(() => AttendanceStatus)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  statusId: number;

  @BelongsTo(() => Patient)
  patient: Patient;

  @HasOne(() => Triage)
  triage?: Triage;

  @BelongsTo(() => AttendanceStatus)
  status?: AttendanceStatus;
}
