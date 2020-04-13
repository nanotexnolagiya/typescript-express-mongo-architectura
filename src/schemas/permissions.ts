import { Schema, Document, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid'
import { IRoles } from "./roles";

export interface IPermission extends Document {
  name: string;
  code: string;
  languageId: string;
  languageHash?: string;
}

export const PermissionScheme: Schema = new Schema({
  name: String,
  code: String,
  languageId: {
    type: Types.ObjectId,
    ref: 'Languages'
  },
  languageHash: {
    type: String,
    default: uuidv4()
  }
});
