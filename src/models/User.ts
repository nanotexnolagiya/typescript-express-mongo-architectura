import { model, Model } from 'mongoose';
import { IUser, UserScheme } from '../schemas/users'

const User: Model<IUser> = model<IUser>('User', UserScheme)

export default User