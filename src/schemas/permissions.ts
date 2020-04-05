import { Schema, Document } from 'mongoose';

export interface IPermission extends Document {
  name: string;
  code: string;
  languageId: string;
  languageHash: string;
}

export const PermissionScheme: Schema = new Schema({
  name: String,
  code: String,
  languageId: {
    type: Schema.Types.ObjectId,
    ref: 'Languages'
  },
  languageHash: String,
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Roles'
    }
  ]
});
