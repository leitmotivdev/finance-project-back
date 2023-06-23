import { Account } from './account.entity';
import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @HasMany(() => Account)
  accounts: Account[];
}
