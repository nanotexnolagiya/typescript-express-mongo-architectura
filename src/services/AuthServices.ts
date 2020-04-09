import { injectable, inject } from 'inversify';
import { UserRepository } from '../repositories/UserRepository';
import { RepositoryTypes } from '../repositories/types';

@injectable()
export class AuthServices {
  constructor(@inject(RepositoryTypes.UserRepository) private readonly userRepository: UserRepository) {}

  public async login(phone: string, password: string) {
    const user = await this.userRepository.findOne({
      phone
    });

    if (!user) throw new Error('Ошибка авторизации');
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) throw new Error('Ошибка авторизации');
    return user.generateAuthTokens();
  }
}
