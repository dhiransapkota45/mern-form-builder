const router = require("express").Router()
const Submission = require("../controllers/submissionController")
const submissionInstance = new Submission()

router.post("/submission/:formid", submissionInstance.formsubmission)
router.get("/submissions/:formid", submissionInstance.submissionsDetail)

router.get("/submission/:submissionid", submissionInstance.submissionDetail)

module.exports = router