import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profile/profile.module';
import { DatabaseModule } from './modules/database/database.module';
import { WalletModule } from './modules/wallet/wallet.module';

@Module({
  imports: [DatabaseModule, AuthModule, ProfileModule, WalletModule],
})
export class AppModule {}
