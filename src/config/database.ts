import { Sequelize } from 'sequelize';
await import('dotenv/config');
console.log(process.env.DB_HOST);

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: 3306,
  database: 'study_island',
  username: 'root',
  password: 'zytzyt520520520',
});

export default sequelize;
