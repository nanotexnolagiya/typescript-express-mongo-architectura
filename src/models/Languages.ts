import { ILanguage, LanguageScheme } from '../schemas/languages';
import { Model, model } from 'mongoose';

export const Languages: Model<ILanguage> = model<ILanguage>('Languages', LanguageScheme);
