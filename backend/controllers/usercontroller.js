const usermodel = require("../models/userModel");

class userController {
  async signup(req, res) {
    try {
      const checkemail = await usermodel.find({ email: req.body.email });
      if (checkemail.length > 0) {
        return res
          .status(400)
          .json({ success: false, msg: "email already exists" });
      }

      const userdata = await usermodel.create(req.body);
      return res.status(200).json({ success: true, user:userdata });
    } catch (error) {
      return res.send("error occured");
    }
  }

  async login(req, res) {
    try {
      const checkemail = await usermodel.find({ email: req.body.email });
    //   email check
      if (checkemail.length === 0) {
        return res
          .status(400)
          .json({ success: false, msg: "email doesnot exists" });
      }

    //   password match
      if (!(checkemail[0].password === req.body.password)) {
        return res
          .status(400)
          .json({ success: false, msg: "password doesnot match" });
      }
      return res.status(200).json({ success: true, user:checkemail });
    } catch (error) {
      return res.send("error occured");
    }
  }
}

module.exports = userController;
