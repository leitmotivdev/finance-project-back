import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { BankPlace } from './BankPlace.entity';
import { Wallet } from './wallet.entity';

@Table({
  tableName: 'banks',
})
export class Bank extends Model {
  @Column
  name: string;

  @Column({
    field: 'nick_name',
  })
  nickName: string;

  @HasMany(() => BankPlace)
  places: BankPlace[];

  @HasMany(() => Wallet)
  wallets: Wallet[];
}
