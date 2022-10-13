const catchAsyncError=require("../middleware/catchAsyncErrors")
const Quizz=require("../models/quizz")

exports.createQuizz=catchAsyncError(async(req,res,next)=>{
    const {quizname,quizdescription,questions}=req.body
    const quizz=await Quizz.create({
        quizname,quizdescription,questions
    })
    res.status(201).json({
        success:true,
        quizz
    })
})

exports.getQuizzes=catchAsyncError(async(req,res,next)=>{
    const quizzes=await Quizz.find()
    res.status(201).json({
        success:true,
        quizzes
    })
})

exports.getQuizzDetails=catchAsyncError(async(req,res,next)=>{
    const quizz=await Quizz.findById(req.params.id)
    res.status(201).json({
        success:true,
        quizz
    })
})