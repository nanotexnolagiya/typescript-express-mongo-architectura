import { Schema, Document } from 'mongoose';

export interface IUserDetail extends Document {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  gender: string;
}

export const UserDetailsScheme: Schema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  birthday: String,
  gender: {
    type: String,
    enum: ['male', 'female']
  }
});
