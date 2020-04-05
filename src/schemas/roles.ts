import { Schema, Document } from 'mongoose';

export interface IRoles extends Document {
  name: string;
  code: string;
  languageId: string;
  languageHash: string;
}

export const RolesScheme: Schema = new Schema({
  name: String,
  code: String,
  languageId: {
    type: Schema.Types.ObjectId,
    ref: 'Languages'
  },
  languageHash: String,
  permissions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Permissions'
    }
  ]
});
