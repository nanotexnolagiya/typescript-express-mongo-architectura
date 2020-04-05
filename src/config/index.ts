import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  MONGO_DB_URL: process.env.MONGO_DB_URL,
  SECRET_KEY: process.env.SECRET_KEY,
  API_URL: process.env.API_URL
};
