import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  PrimaryKey,
} from 'sequelize-typescript';
import { Attendance } from '../attendances/attendance.entity';

@Table
export class Patient extends Model {
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
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  socialName: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birthday: Date;

  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  cns: string;

  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  rg: string;

  @Column({
    type: DataType.STRING(11),
    allowNull: false,
    unique: true,
  })
  cpf: string;

  @Column({
    type: DataType.STRING(9),
    allowNull: false,
  })
  zipCode: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  number: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  neighborhood: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  city: string;

  @Column({
    type: DataType.STRING(25),
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  complement: string;

  @Column({
    type: DataType.STRING(13),
    allowNull: false,
  })
  telephone: string;

  @Column({
    type: DataType.STRING(14),
    allowNull: false,
  })
  cell: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fatherName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  motherName: string;

  @Column({
    type: DataType.ENUM,
    values: ['branca', 'preta', 'parda', 'indigena', 'amarela'],
    allowNull: false,
  })
  ethnicity: string;

  @Column({
    type: DataType.ENUM,
    values: ['masculino', 'feminino'],
    allowNull: false,
  })
  gender: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @HasMany(() => Attendance)
  attendance?: Attendance[];
}
