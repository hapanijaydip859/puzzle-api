let USER = require('../model/userpuzzle')

exports.USERCREATE = async function (req, res, next) {
    try {
        let UserCreate = await USER.create(req.body)
        res.status(201).json({
            status: "success",
            message: "User Create success",
            data: UserCreate

        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.USERFIND = async function (req, res, next) {
    try {
        let UserRead = await USER.find()
        res.status(201).json({
            status: "success",
            message: "USER FInd success",
            data: UserRead

        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.USERUPDATE = async function (req, res, next) {
    try {
        let UserUpdate = await USER.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).json({
            status: "success",
            message: "USer Update success",
            data: UserUpdate
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.USERDELETE = async function (req, res, next) {
    try {
        let UserDelete = await USER.findByIdAndDelete(req.params.id)
        if (!UserDelete) { throw new Error('data not found') }
        res.status(201).json({
            status: "success",
            message: "User Delete success"
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}