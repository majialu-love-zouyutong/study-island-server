import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('study_island', 'root', 'zytzyt520520520', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;