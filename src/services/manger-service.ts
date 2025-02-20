import { Manager } from '@/models';
import bcrypt from 'bcrypt';

interface CreateManagerResponse {
  id: number;
  managerName: string;
}

class ManagerService {
  /**
   *
   * @param {Manager} manager 管理员信息
   * @returns
   */
  async createManager(manager: Manager): Promise<CreateManagerResponse> {
    try {
      // 1. 加密密码
      const hashedPassword = await bcrypt.hash(manager.password, 10);
      // 2. 新建管理员
      const newManager = await Manager.create({
        managerName: manager.managerName,
        password: hashedPassword,
      });
      // 3. 返回管理员id和
      return {
        id: newManager.id,
        managerName: newManager.managerName,
      };
    } catch (error) {
      console.log('新建管理员出错了');
      throw error;
    }
  }
}

export const managerService = new ManagerService();
