import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  PrimaryKey,
} from 'sequelize-typescript';
import { EthnicityEnum } from 'src/core/enums/ethnicity.enum';
import { GenderEnum } from 'src/core/enums/gender.enum';
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
    type: DataType.STRING(14),
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
    type: DataType.SMALLINT,
    allowNull: false,
  })
  ethnicity: EthnicityEnum;

  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  gender: GenderEnum;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @HasMany(() => Attendance)
  attendance?: Attendance[];
}
