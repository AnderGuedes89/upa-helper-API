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

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @ForeignKey(() => Patient)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  patientId: number;

  @BelongsTo(() => Patient)
  patient: Patient;

  @HasOne(() => Triage)
  triage?: Triage;
}
