const userModel = require("../models/User.Schema");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Ever Field is required",
      });
    }
    // check for valid Email format
  
    let ValidEmail = emailValidator.validate(email);
    if (!ValidEmail) {
      return res.status(400).json({
        success: false,
        message: "please provide valid email",
      });
    }
    try {
      const user = await userModel
        .findOne({
          email,
        })
        .select("+password");
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({
          success: false,
          message: "Invalid credentials",
        });
      }
      const token = user.jwtToken();
      user.password = undefined;
      const cookieOptions = {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      };
      res.cookie("token", token, cookieOptions);
      res.status(200).json({
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
    login
  };