const formmodel = require("../models/formModel");
const usermodel = require("../models/userModel");
const mongoose = require("mongoose");

class fromController {
  async savefrom(req, res) {
    const checkUser = await usermodel.findById(req.body.user);
    if (!checkUser) {
      return res.status(400).json({ success: false, msg: "unauthorized!" });
    }
    const createform = await formmodel.create(req.body);
    return res.status(200).json({ success: true, msg: "form created" });
  }

  async allFormDetails(req, res) {
    try {
      const pipeline = [
        {
          $match: {
            user: mongoose.Types.ObjectId(req.params.id),
          },
        },
        {
          $lookup: {
            from: "submissions",
            localField: "_id",
            foreignField: "form",
            as: "submissions",
          },
        },
        {
          $addFields: {
            submissionCount: { $size: "$submissions" },
            fieldCount: { $size: "$formFields" },
          },
        },
        {
          $project: {
            formname: 1,
            formFields: 1,
            fieldCount: 1,
            submissionCount: 1,
          },
        },
      ];
      const formmodeldata = await formmodel.aggregate(pipeline);
      return res.send(formmodeldata);
    } catch (error) {
      res.json({ success: false });
    }
  }

  async formDetail(req, res) {
    try {
      const form = await formmodel.findById(req.params.id)
      res.status(200).json({success:true, form})
    } catch (error) {
      res.json({ success: false });
    }
  }
}

module.exports = fromController;
