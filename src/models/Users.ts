import { model, Model } from 'mongoose';
import { IUser, UsersScheme } from '../schemas/users';



export const Users: Model<IUser> = model<IUser>('Users', UsersScheme);
