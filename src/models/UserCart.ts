import { IUserCart, UserCartScheme } from '../schemas/user-cart';
import { Model, model } from 'mongoose';

export const UserCart: Model<IUserCart> = model<IUserCart>('Languages', UserCartScheme);
