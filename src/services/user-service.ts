import User from "@/models/user-model";
class UserService {
  async getUsers() {
    return await User.findAll();
  }
}

export default new UserService();