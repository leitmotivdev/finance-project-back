import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { User } from '../database/schemas/user.schema';

@Injectable()
export class UserService {
  @Inject('USERS_REPOSITORY')
  private userRepository: typeof User;

  async createUser(sub: string): Promise<User> {
    const userFound = await this.userRepository.findOne({ where: { sub } });
    if (userFound) throw new BadRequestException('User already exist');

    const user = await User.create({ sub });
    return user;
  }
}
