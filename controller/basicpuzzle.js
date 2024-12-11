let BASIC = require('../model/basicpuzzle')

exports.BASICCREATE = async function(req,res,next){
    try {
        let BasicCreate = await BASIC.create(req.body)
        res.status(201).json({
            status : "success",
            message : "Basic Create success" ,
            data : BasicCreate

        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.BASICREAD = async function(req,res,next){
    try {
        let BasicRead = await BASIC.find()
        res.status(201).json({
            status : "success",
            message : "Basic FInd success" ,
            data : BasicRead

        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.BASICUPDATE = async function(req,res,next){
    try {
        let BasicUpdate = await BASIC.findByIdAndUpdate(req.params.id , req.body, {new : true})
        res.status(201).json({
            status : "success",
            message : "Basic Update success" ,
            data : BasicUpdate
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}
exports.BASICDELETE = async function(req,res,next){
    try {
        let BasicDelete = await BASIC.findByIdAndDelete(req.params.id)
        if(!BasicDelete){throw new Error('data not found')}
        res.status(201).json({
            status : "success",
            message : "Basic Delete success" 
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}
