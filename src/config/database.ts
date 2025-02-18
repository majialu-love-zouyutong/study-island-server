import { Sequelize, type Dialect } from 'sequelize';
await import('dotenv/config');

const sequelize = new Sequelize({
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: process.env.DB_DIALECT as Dialect || 'mysql',
  port: parseInt(process.env.DB_PORT || '3306'),
  database: process.env.DB_NAME || 'study_island',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
});

export default sequelize;
