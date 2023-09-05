const userModel = require("../models/User.Schema");
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