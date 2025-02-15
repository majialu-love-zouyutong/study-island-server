import {Sequelize} from 'sequelize';

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  database: 'study_island',
  username: 'root',
  password: 'zytzyt520520520',
})

export default sequelize;