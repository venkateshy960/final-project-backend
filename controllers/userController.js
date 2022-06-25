const BaseController = require("./baseController");
const UserModel = require("../models/userModel");
class Login extends BaseController {
  constructor() {
    super(UserModel, Login);
  }
}
module.exports = new Login();
