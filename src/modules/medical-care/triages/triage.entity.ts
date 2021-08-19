import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Triage extends Model {
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
    type: DataType.STRING,
    allowNull: false,
  })
  preInformation: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  medicines: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  personalBackground: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  pain: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  riskRating: string;

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
}
