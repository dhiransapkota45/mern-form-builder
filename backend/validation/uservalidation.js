const yup = require("yup")

const validate = (schema) => async (req, res, next) => {
  console.log(req.body);
    
    try {
      await schema.validate({
        body: req.body,
      });
      return next();
    } catch (error) {
      return res.status(400).json({success:false, msg:"validation error!"})
    }
  };

module.exports = validate

