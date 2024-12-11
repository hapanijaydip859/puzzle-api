let SUBMISSION = require('../model/submission')

exports.SUBMISSIONCREATE = async function (req, res, next) {
    try {
        let SubmissionCreate = await SUBMISSION.create(req.body)
        res.status(201).json({
            status: "success",
            message: "Submission Create success",
            data: SubmissionCreate

        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}
exports.SUBMISSIONFIND = async function (req, res, next) {
    try {
        let SubmissionRead = await SUBMISSION.find().populate('userId CategoryId QuestionId')
        res.status(201).json({
            status: "success",
            message: "Submission FInd success",
            data: SubmissionRead

        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}
exports.SUBMISSIONUPDATE = async function (req, res, next) {
    try {
        let SubmissionUpdate = await SUBMISSION.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).json({
            status: "success",
            message: "Submission Update success",
            data: SubmissionUpdate
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}
exports.SUBMISSIONDELETE = async function (req, res, next) {
    try {
        let SubmissionDelete = await SUBMISSION.findByIdAndDelete(req.params.id)
        if (!SubmissionDelete) { throw new Error('data not found') }
        res.status(201).json({
            status: "success",
            message: "Submission Delete success"
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}