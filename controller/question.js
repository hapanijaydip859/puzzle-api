let QUESTION = require('../model/question')

exports.QUESTIONCREATE = async function (req, res, next) {
    try {
        let QuestionCreate = await QUESTION.create(req.body)
        res.status(201).json({
            status: "success",
            message: "Question Create success",
            data: QuestionCreate

        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.QUESTIONFIND = async function (req, res, next) {
    try {
        let QuestionRead = await QUESTION.find()
        res.status(201).json({
            status: "success",
            message: "Question FInd success",
            data: QuestionRead

        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.QUESTIONUPDATE = async function (req, res, next) {
    try {
        let QuestionUpdate = await QUESTION.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).json({
            status: "success",
            message: "Question Update success",
            data: QuestionUpdate
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.QUESTIONDELETE = async function (req, res, next) {
    try {
        let QuestionDelete = await QUESTION.findByIdAndDelete(req.params.id)
        if (!QuestionDelete) { throw new Error('data not found') }
        res.status(201).json({
            status: "success",
            message: "Question Delete success"
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}