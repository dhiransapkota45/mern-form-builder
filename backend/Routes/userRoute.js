const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");
const validate = require("../validation/uservalidation");
const validateLoginUserSchema = require("../validationSchema/userLoginSchema");

const validateSignupUserSchema = require("../validationSchema/userSignupSchema");

const newUserControllerInstance = new userController();
router.post(
  "/signup",
  validate(validateSignupUserSchema),
  newUserControllerInstance.signup
);

router.post(
  "/login",
  validate(validateLoginUserSchema),
  newUserControllerInstance.login
);

module.exports = router;
