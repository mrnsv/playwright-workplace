import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  BASE_URL: process.env.BASE_URL!,
  USER_EMAIL_001: process.env.USER_EMAIL_001!,
  USER_EMAIL_002: process.env.USER_EMAIL_002!,
  USER_PASSWORD: process.env.USER_PASSWORD!,
};
