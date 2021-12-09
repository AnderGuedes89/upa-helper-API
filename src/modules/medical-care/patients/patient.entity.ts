import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Ethnicity } from 'src/core/entities/ethnicity.entity';
import { Gender } from 'src/core/entities/gender.entity';
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
    allowNull: true,
  })
  socialName: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  birthday: Date;

  @Column({
    type: DataType.STRING(18),
    allowNull: true,
  })
  cns: string;

  @Column({
    type: DataType.STRING(15),
    allowNull: true,
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
    allowNull: true,
  })
  zipCode: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  address: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
  })
  number: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  neighborhood: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  city: string;

  @Column({
    type: DataType.CHAR(2),
    allowNull: true,
  })
  state: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  complement: string;

  @Column({
    type: DataType.STRING(14),
    allowNull: true,
  })
  telephone: string;

  @Column({
    type: DataType.STRING(15),
    allowNull: true,
  })
  cell: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  fatherName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  motherName: string;

  @ForeignKey(() => Ethnicity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ethnicityId: number;

  @ForeignKey(() => Gender)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  genderId: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @HasMany(() => Attendance)
  attendance?: Attendance[];

  @BelongsTo(() => Gender)
  gender: Gender;

  @BelongsTo(() => Ethnicity)
  ethnicity: Ethnicity;
}
