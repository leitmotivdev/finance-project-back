import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { User } from './user.entity';
import { Wallet } from './wallet.entity';
import { Transaction } from './transactions.entity';

@Table({
  tableName: 'account',
})
export class Account extends Model {
  @Column
  name: string;

  @ForeignKey(() => User)
  @Column({ field: 'user_id' })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Wallet)
  wallets: Wallet[];

  @HasMany(() => Transaction)
  accounts: Transaction[];
}
