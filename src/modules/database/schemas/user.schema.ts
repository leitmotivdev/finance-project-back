import { Profile } from './profile.schema';
import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @Column
  sub: string;

  @HasMany(() => Profile)
  profiles: Profile[];
}
