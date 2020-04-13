import { Schema, Document, Types } from 'mongoose';
import { v4 as uuidv4 } from "uuid";
import { IPermission } from "./permissions";

export interface IRoles extends Document {
  name: string;
  code: string;
  languageId: string;
  languageHash: string;
  permissions: string[];
  addPermission(permission: IPermission): string[];
  setPermissions(permissions: IPermission[]): string[];
}

export const RolesScheme: Schema = new Schema({
  name: String,
  code: String,
  languageId: {
    type: Types.ObjectId,
    ref: 'Languages'
  },
  languageHash: {
    type: String,
    default: uuidv4()
  },
  permissions: [
    {
      type: Types.ObjectId,
      ref: 'Permissions'
    }
  ]
});

RolesScheme.methods.addPermission = function(permission: IPermission) {
  return this.model('Roles').findByIdAndUpdate(this._id, {
    $push: {
      permissions: permission._id
    }
  });
}

RolesScheme.methods.setPermissions = function(permissions: IPermission[]) {
  return this.model('Roles').findByIdAndUpdate(this._id, {
    $set: {
      permissions: permissions.map((permission: IPermission) => permission._id)
    }
  });
}
