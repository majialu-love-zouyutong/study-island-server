// 引入 Sequelize 中的 DataTypes 和 Model 类，以及自定义的数据库配置
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '@/database';

// 定义 IManager 接口，描述 Manager 模型的属性
interface IManager {
  id?: number;
  managerName: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// 创建 Manager 类，继承自 Model 并实现 IManager 接口
export class Manager extends Model<IManager> implements IManager {
  public readonly id!: number; // 管理员ID，主键
  public managerName!: string; // 管理员用户名
  public password!: string; // 管理员密码
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// 初始化 Manager 模型，定义字段类型和约束
Manager.init(
  {
    id: {
      type: DataTypes.INTEGER, // 字段类型为整数
      autoIncrement: true, // 自动递增
      primaryKey: true, // 主键
    },
    managerName: {
      type: DataTypes.STRING, // 字段类型为字符串
      allowNull: false, // 不允许为空
    },
    password: {
      type: DataTypes.STRING, // 字段类型为字符串
      allowNull: false, // 不允许为空
    },
  },
  {
    sequelize,          // 关联 Sequelize 实例
    timestamps: true,   // 自动添加 createdAt 和 updatedAt 时间戳
    underscored: true,  // 把js中的驼峰命名自动转化为下划线分隔的列名
  }
);
