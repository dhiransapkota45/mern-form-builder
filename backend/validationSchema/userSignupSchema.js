const yup = require("yup")

const validateUserSignupSchema = yup.object({
    body: yup.object({
      username: yup.string().required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password is too short - should be 8 chars minimum."),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    }),
  });
  
module.exports = validateUserSignupSchema  