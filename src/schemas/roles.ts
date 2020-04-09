import { Schema, Document, Types } from 'mongoose';

export interface IRoles extends Document {
  name: string;
  code: string;
  languageId: string;
  languageHash: string;
  permissions: string[];
}

export const RolesScheme: Schema = new Schema({
  name: String,
  code: String,
  languageId: {
    type: Types.ObjectId,
    ref: 'Languages'
  },
  languageHash: String,
  permissions: [
    {
      type: Types.ObjectId,
      ref: 'Permissions'
    }
  ]
});
