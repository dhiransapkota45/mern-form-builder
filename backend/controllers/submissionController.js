const formModel = require("../models/formModel")
const submission = require("../models/submission")

class Submission{
    async formsubmission(req, res){
        const {submitter} = req.body
        delete req.body.submitter

        const checkform = await formModel.findById(req.params.formid)
        if(!checkform){
           return res.status(400).json({success:false, msg:"form does not exists"}) 
        }

        await submission.create({
            form:req.params.formid, submitter, values: req.body
        })
        return res.json({success:true, msg:"submission created successfully"})
    }

    async submissionsDetail(req, res){
        try {
            const response = await submission.find({form:req.params.formid})
            return res.status(200).json({success:true, response})
        } catch (error) {
            return res.send(error)
        }
    }
    async submissionDetail(req, res){
        try {
            const response  = await submission.findById(req.params.submissionid)
            return res.status(200).json({response})
        } catch (error) {
            return res.send(error)
        }
    }
}

module.exports = Submission