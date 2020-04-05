import { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  phone: string;
  password: string;
}

export const UsersScheme: Schema = new Schema({
  phone: String,
  password: String
});
