import { Schema, Document, Types } from 'mongoose';

export interface IUserCart extends Document {
  userId: string;
  booksId: string[];
}

export const UserCartScheme: Schema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: 'Users'
  },
  booksId: [
    { type: Types.ObjectId, ref: 'Books' }
  ]
});
