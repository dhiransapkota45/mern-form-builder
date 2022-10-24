const express = require("express");
const router = express.Router();
const formController = require("../controllers/formcontroller")
const formControllerInstance = new formController()

router.post("/saveform", formControllerInstance.savefrom)
router.get("/formdetails/:id", formControllerInstance.allFormDetails)

router.get("/formdetail/:id", formControllerInstance.formDetail)

module.exports = router;
