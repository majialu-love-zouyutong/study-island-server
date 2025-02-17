// 引入 Sequelize 中的 DataTypes 和 Model 类，以及自定义的数据库配置
import { DataTypes, Model } from 'sequelize';
import sequelize from '@/config/database';

// 定义 UserAttributes 接口，描述 User 模型的属性
interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
}

// 创建 User 类，继承自 Model 并实现 UserAttributes 接口
class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number; // 用户ID，主键
  public username!: string; // 用户名
  public email!: string; // 用户邮箱
  public password!: string; // 用户密码
}

// 初始化 User 模型，定义字段类型和约束
User.init(
  {
    id: {
      type: DataTypes.INTEGER, // 字段类型为整数
      autoIncrement: true, // 自动递增
      primaryKey: true, // 主键
    },
    username: {
      type: DataTypes.STRING, // 字段类型为字符串
      allowNull: false, // 不允许为空
    },
    email: {
      type: DataTypes.STRING, // 字段类型为字符串
      allowNull: false, // 不允许为空
      unique: true, // 唯一约束
    },
    password: {
      type: DataTypes.STRING, // 字段类型为字符串
      allowNull: false, // 不允许为空
    },
  },
  {
    sequelize, // 关联 Sequelize 实例
    tableName: 'users', // 数据库表名
    timestamps: true, // 自动添加 createdAt 和 updatedAt 时间戳
  }
);

// 自动创建或更新数据库表
User.sync({ force: true }).then(() => {
  console.log('User table created successfully!');
});
