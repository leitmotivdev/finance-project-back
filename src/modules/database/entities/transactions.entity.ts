import {
  Table,
  BelongsTo,
  ForeignKey,
  DataType,
  Column,
  Model,
} from 'sequelize-typescript';
import { Wallet } from './wallet.entity';
import { Account } from './account.entity';
import { TransactionPlace } from './transactionPlace.entity';

@Table({
  tableName: 'transactions',
})
export class Transaction extends Model {
  @Column
  concept: string;

  @Column({
    type: DataType.FLOAT,
  })
  amount: number;

  @Column
  isIncome: boolean;

  @ForeignKey(() => Wallet)
  @Column({ field: 'wallet_id' })
  walletId: number;

  @BelongsTo(() => Wallet)
  wallet: Wallet;

  @ForeignKey(() => Account)
  @Column({ field: 'account_id' })
  accountId: number;

  @BelongsTo(() => Account)
  account: Wallet;

  @ForeignKey(() => TransactionPlace)
  @Column({ field: 'place_id' })
  transactionPlaceId: number;

  @BelongsTo(() => TransactionPlace)
  transactionPlace: TransactionPlace;
}
