const logger = require("../core/logger");
const usersModel = require('../models/users.js')

module.exports = {
  // Things to do
  // 1. get all users
  getAllUsers: async () =>{
    try {
      const users = await usersModel.getAllUser();

      return users;
    } catch (error) {
        return error
    }
  },
  // 2. add user
  addUser: async (data) => {
    try {
      const result = await  usersModel.addUser(data);

      return result;
    } catch (error) {
      return error
    }
  },
  // 3. update user
  updateUser: async (data) => {
    try {
      const result = await usersModel.updateUser(data);

      return result;
    } catch (error) {
      return error
    }
  }
  // 4. update status user
  // 5. login
};