import { Schema, Document, Types } from 'mongoose';

export interface IPermission extends Document {
  name: string;
  code: string;
  languageId: string;
  languageHash: string;
  roles: string[];
}

export const PermissionScheme: Schema = new Schema({
  name: String,
  code: String,
  languageId: {
    type: Types.ObjectId,
    ref: 'Languages'
  },
  languageHash: String,
  roles: [
    {
      type: Types.ObjectId,
      ref: 'Roles'
    }
  ]
});
