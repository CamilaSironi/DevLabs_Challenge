import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME || "";
const dbUser = process.env.DB_USER || "";
const dbPassword = process.env.DB_PASSWORD || "";
const host = process.env.DB_HOST || "";
const dbPort = process.env.DB_PORT || 5432;

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: host,
  port: Number(dbPort),
  dialect: 'postgres',
  logging: false
});