import { Schema, Document, Types } from 'mongoose';
import { v1 as uuidv1 } from 'uuid';
import * as jwt from 'jsonwebtoken';
import { config } from '../config';
import { compare, hash, genSalt } from 'bcryptjs';

export interface IUser extends Document {
  phone: string;
  password: string;
  userDetail: string;
  roles: string[];
  comparePassword(password: string): Promise<boolean>;
  generateAuthTokens(): any;
}

export const UsersScheme: Schema = new Schema({
  phone: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userDetail: {
    type: Types.ObjectId,
    ref: 'UserDetails'
  },
  roles: [
    { type: Types.ObjectId, ref: 'Roles' }
  ]
});

UsersScheme.pre<IUser>('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await genSalt();
  this.password = await hash(this.password, salt);
  return next();
});

UsersScheme.methods.comparePassword = async function(password: string) {
  const isValidPassword = await compare(password, this.password);
  return isValidPassword;
};

UsersScheme.methods.generateAuthTokens = function () {
  return {
    token: jwt.sign({ _id: this._id }, config.SECRET_KEY),
    refreshToken: uuidv1()
  };
};
