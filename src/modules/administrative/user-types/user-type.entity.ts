import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  PrimaryKey,
} from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class UserType extends Model {
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
  label: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @HasMany(() => User)
  user?: User[];
}
