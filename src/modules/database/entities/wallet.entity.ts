import {
  Column,
  DataType,
  Table,
  Model,
  HasMany,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Transaction } from './transactions.entity';
import { Account } from './account.entity';
import { Bank } from './bank.entity';

enum EnumWalletType {
  CREDIT = 'credit',
  DEBIT = 'debit',
  SERVICE = 'service',
  CASH = 'cash',
}

@Table({
  tableName: 'wallet',
})
export class Wallet extends Model {
  @Column
  name: string;

  @Column({
    defaultValue: EnumWalletType.CASH,
    type: DataType.ENUM(...Object.values(EnumWalletType)),
  })
  type: EnumWalletType;

  @Column({
    type: DataType.FLOAT,
  })
  balance: number;

  @Column
  accountNumber: string;

  @Column({ field: 'closing_date', allowNull: true })
  closingDate: Date;

  @Column({ field: 'due_date', allowNull: true })
  dueDate: Date;

  @Column({ defaultValue: '#000000' })
  color: string;

  @HasMany(() => Transaction)
  transactions: Transaction[];

  @ForeignKey(() => Account)
  @Column({ field: 'account_id' })
  accountId: number;

  @BelongsTo(() => Account)
  account: Account;

  @ForeignKey(() => Bank)
  @Column({ field: 'bank_id' })
  bankId: number;

  @BelongsTo(() => Bank)
  bank: Bank;
}
