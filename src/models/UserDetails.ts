import { Model, model } from 'mongoose';
import { UserDetailsScheme, IUserDetail } from '../schemas/user-details';

export const UserDetails: Model<IUserDetail> = model<IUserDetail>('UserDetails', UserDetailsScheme);
