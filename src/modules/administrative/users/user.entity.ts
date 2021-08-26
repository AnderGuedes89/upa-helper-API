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
import { Triage } from 'src/modules/medical-care/triages/triage.entity';
import { UserType } from '../user-types/user-type.entity';

@Table
export class User extends Model {
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
  password: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birthday: Date;

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
    allowNull: true,
    defaultValue: null,
  })
  complement: string;

  @Column({
    type: DataType.STRING(13),
    allowNull: true,
    defaultValue: null,
  })
  telephone: string;

  @Column({
    type: DataType.STRING(14),
    allowNull: false,
  })
  cell: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @ForeignKey(() => UserType)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userTypeId: number;

  @BelongsTo(() => UserType)
  userType: UserType;

  @HasMany(() => Triage)
  triage?: Triage[];
}
