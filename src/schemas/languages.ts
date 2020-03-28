import { Schema, Document } from 'mongoose';

export interface ILanguage extends Document {
  code: string
  name: string
  defaultLang?: boolean
};

export const LanguageScheme: Schema = new Schema({
  code: String,
  name: String,
  defaultLang: Boolean
});