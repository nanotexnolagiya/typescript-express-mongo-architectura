import { injectable } from 'inversify';
import { BaseRepository } from './BaseRepository';
import { Users } from '../models/Users';
import { IUser } from '../schemas/users';

@injectable()
export class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(Users);
  }
}
