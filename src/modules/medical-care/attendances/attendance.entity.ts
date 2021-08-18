import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Attendance extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  receptionInformation: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  arrivalDate: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;
}
