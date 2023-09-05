const userModel = require("../models/User.Schema");
const emailValidator = require("email-validator");

const singup = async (req, res) => {
    const { name, email, password, confrimPassword,bio } = req.body;
    console.log(name);
    try {
        if (!name || !email || !password || !confrimPassword || !bio ) {
          return res.status(400).send({
            success: false,
            message: "Ever Field is required",
          });
        }

        // check for valid Email format
        let ValidEmail = emailValidator.validate(email);
        if (!ValidEmail) {
          return res.status(400).send({
            success: false,
            message: "please provide valid email",
          });
        }
         // check for valid password format
        let Validpassword = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
        if (Validpassword  === password) {
          return res.status(400).send({
            success: false,
            message: "Password must be Minimum eight characters, at least one letter and one number:",
          });
        }

        // ...................................................

        if (password !== confrimPassword) {
          return res.status(400).send({
            success: false,
            message: "Password & confrim password don't match",
          });
        }
        // ...................................................
        const userInfo = userModel(req.body);
        const result = await userInfo.save();
        return res.status(200).send({
          success: true,
          data: result,
        });
      } catch (e) {
        if (e.code === 11000) {
          return res.status(400).send({
            success: false,
            message: "Account is already exists",
          });
        }
        return res.status(400).send({
          success: false,
          message: e.message,
        });
      }

}

module.exports = {
    singup
  };