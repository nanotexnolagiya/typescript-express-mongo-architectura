import { injectable } from 'inversify';
import { BaseRepository } from "./BaseRepository";
import User from "../models/User";
import { IUser } from '../schemas/users';

@injectable()
class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(User)
  }
}