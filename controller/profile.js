let PROFILE = require('../model/profile')

exports.PROFILECREATE = async function(req,res,next){
    try {
        let ProfileCreate = await PROFILE.create(req.body)
        res.status(201).json({
            status : "success",
            message : "ProfileCreate Create success" ,
            data : ProfileCreate

        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.PROFILEFIND = async function(req,res,next){
    try {
        let ProfileRead = await PROFILE.find().populate('puzzlesCreated puzzlesUser')
        res.status(201).json({
            status : "success",
            message : "Profile FInd success" ,
            data : ProfileRead

        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.PROFILEUPDATE = async function(req,res,next){
    try {
        let ProfileUpdate = await PROFILE.findByIdAndUpdate(req.params.id , req.body, {new : true})
        res.status(201).json({
            status : "success",
            message : "Profile Update success" ,
            data : ProfileUpdate
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.PROFILEDELETE = async function(req,res,next){
    try {
        let ProfileDelete = await PROFILE.findByIdAndDelete(req.params.id)
        if(!ProfileDelete){throw new Error('data not found')}
        res.status(201).json({
            status : "success",
            message : "Profile Delete success" 
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}