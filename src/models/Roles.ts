import { model, Model } from 'mongoose';
import { IRoles, RolesScheme } from '../schemas/roles';



export const Roles: Model<IRoles> = model<IRoles>('Roles', RolesScheme);
