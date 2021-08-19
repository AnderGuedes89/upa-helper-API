import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Attendance extends Model {
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
}
