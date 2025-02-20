import { Manager } from './manager-model';
import { sequelize } from '@/database';

sequelize.sync().then(() => {
  console.log('Database synced successfully!');
});

export { Manager };
