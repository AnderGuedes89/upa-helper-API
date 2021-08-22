import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
} from 'sequelize-typescript';
import { PainIntensityEnum } from 'src/core/enums/pain-intensity.enum';
import { RiskRatingEnum } from 'src/core/enums/risk-rating.enum';
import { User } from 'src/modules/administrative/users/user.entity';
import { Attendance } from '../attendances/attendance.entity';

@Table
export class Triage extends Model {
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
    type: DataType.STRING(7),
    allowNull: false,
  })
  temperature: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  triageDate: Date;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  saturation: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  bloodGlucose: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  pulse: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  respiratoryFrequency: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  weight: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  height: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  preInformation: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  medicines: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  personalBackground: string;

  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  painIntensity: PainIntensityEnum;

  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  riskRating: RiskRatingEnum;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isPreferred: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

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

  @BelongsTo(() => User)
  user: User;
}
