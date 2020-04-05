import { injectable, inject } from 'inversify';
import { IUser } from '../schemas/users';
import { UserRepository } from '../repositories/UserRepository';
import { RepositoryTypes } from '../repositories/types';

@injectable()
export class UserServices {
  constructor(@inject(RepositoryTypes.UserRepository) private readonly userRepository: UserRepository) {}

  async createUser(user: IUser): Promise<IUser> {
    return this.userRepository.create(user);
  }

  async getAll(): Promise<IUser[]> {
    return this.userRepository.find({});
  }
}
