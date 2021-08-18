import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Triage extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bloodPressure: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  temperature: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  triageDate: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  saturation: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bloodGlucose: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  pulse: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  respiratoryFrequency: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  weight: string;

  @Column({
    type: DataType.STRING,
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
    type: DataType.STRING,
    allowNull: false,
  })
  pain: string;

  @Column({
    type: DataType.STRING,
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
