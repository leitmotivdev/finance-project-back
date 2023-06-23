import { User } from './entities/user.entity';
import { Bank } from './entities/bank.entity';
import { Sequelize } from 'sequelize-typescript';
import { Wallet } from './entities/wallet.entity';
import { Account } from './entities/account.entity';
import { BankPlace } from './entities/bankPlace.entity';
import { Transaction } from './entities/transactions.entity';
import { TransactionPlace } from './entities/transactionPlace.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: '1234',
        database: 'finance',
      });
      sequelize.addModels([
        User,
        Account,
        Wallet,
        Transaction,
        BankPlace,
        Bank,
        TransactionPlace,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
