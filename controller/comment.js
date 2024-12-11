let COMMENT = require('../model/comment')

exports.COMMENTCREATE = async function(req,res,next){
    try {
        let CommenCreate = await COMMENT.create(req.body)
        res.status(201).json({
            status : "success",
            message : "Comment Create success" ,
            data : CommenCreate

        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.COMMENTFIND = async function(req,res,next){
    try {
        let CommentRead = await COMMENT.find().populate('puzzleid userid')
        res.status(201).json({
            status : "success",
            message : "Comment FInd success" ,
            data : CommentRead

        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.COMMENTUPDATE = async function(req,res,next){
    try {
        let CommentUpdate = await COMMENT.findByIdAndUpdate(req.params.id , req.body, {new : true})
        res.status(201).json({
            status : "success",
            message : "Comment Update success" ,
            data : CommentUpdate
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.COMMENTDELETE = async function(req,res,next){
    try {
        let CommentDelete = await COMMENT.findByIdAndDelete(req.params.id)
        if(!CommentDelete){throw new Error('data not found')}
        res.status(201).json({
            status : "success",
            message : "Comment Delete success" 
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}