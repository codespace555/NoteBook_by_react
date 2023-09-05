const userModel = require("../models/User.Schema");

const getUser = async (req, res) => {
    const UserId = req.user.id;
  
    try {
      const user = await userModel.findById(UserId);
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  };

module.exports = {
    getUser
  };