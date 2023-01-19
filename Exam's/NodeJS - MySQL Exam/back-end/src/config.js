import dotenv from "dotenv";

dotenv.config();

export const LOCAL_PORT = +process.env.LOCAL_PORT;

export const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
};

export const jwtSecret = process.env.jwtSecret;
