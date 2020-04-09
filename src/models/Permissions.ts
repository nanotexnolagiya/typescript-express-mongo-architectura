import { IPermission, PermissionScheme } from '../schemas/permissions';
import { Model, model } from 'mongoose';

export const Permissions: Model<IPermission> = model<IPermission>('Permissions', PermissionScheme);
