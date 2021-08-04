import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Patient extends Model<Patient> {
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
    type: DataType.STRING,
    allowNull: false,
  })
  cns: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  rg: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cpf: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  zipCode: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  number: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  neighborhood: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  complement: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  telephone: string;

  @Column({
    type: DataType.STRING,
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
    values: ['masculino', 'feminino'],
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
}
