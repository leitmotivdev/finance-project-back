import { Module } from '@nestjs/common';

import { UserService } from '../user/user.service';
import { ProfileController } from './profile.controller';
import { ProfileService } from '../profile/profile.service';
import { ProfileProviderRepository } from '../database/providers/profile.provider';
import { UserProviderRepository } from '../database/providers/user.provider';

@Module({
  controllers: [ProfileController],
  providers: [
    ProfileProviderRepository,
    UserProviderRepository,
    ProfileService,
    UserService,
  ],
})
export class ProfileModule {}
