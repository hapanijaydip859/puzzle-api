let CATEGORY = require('../model/category')

exports.CATEGORYCREATE = async function(req,res,next){
    try {
        let CategoryCreate = await CATEGORY.create(req.body)
        res.status(201).json({
            status : "success",
            message : "Category Create success" ,
            data : CategoryCreate

        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.CATEGORYFIND = async function(req,res,next){
    try {
        let CategoryRead = await CATEGORY.find()
        res.status(201).json({
            status : "success",
            message : "Category FInd success" ,
            data : CategoryRead

        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.CATEGORYUPDATE = async function(req,res,next){
    try {
        let CategoryUpdate = await CATEGORY.findByIdAndUpdate(req.params.id , req.body, {new : true})
        res.status(201).json({
            status : "success",
            message : "Category Update success" ,
            data : CategoryUpdate
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.CATEGORYDELETE = async function(req,res,next){
    try {
        let CategoryDelete = await CATEGORY.findByIdAndDelete(req.params.id)
        if(!CategoryDelete){throw new Error('data not found')}
        res.status(201).json({
            status : "success",
            message : "Category Delete success" 
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}