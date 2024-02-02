const catchAsyncError=require("../middleware/catchAsyncErrors")
const User=require("../models/user")
const userVerification=require("../models/userVerification")
const ErrorHandler = require("../utils/errorHandler")
const sendToken=require("../utils/jwtToken")
const nodemailer=require("nodemailer")
const {v4:uuidv4}=require("uuid")
require("dotenv").config()

let transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.Auth_EMAIL,
        pass:process.env.Auth_PASS,
    }
})
transporter.verify((error,success)=>{
    if(error) {
        console.log(error)
    } else {
        console.log('Ready for message !')
        console.log(success)
    }
})
exports.registerUser=catchAsyncError(async(req,res,next)=>{
    const {name,email,password}=req.body
    const user=await User.create({
        name,email,password
    })
    sendToken(user,201,res)
})

exports.loginUser=catchAsyncError(async(req,res,next)=>{
    const {email,password}=req.body
    if(!email||!password){
        return next(new ErrorHandler("Please enter email and password",400))
    }
    const user=await User.findOne({email}).select("password").select("role")
    if(!user){
        return next(new ErrorHandler("Invalid email or password",401))
    }
    const isPasswordMatched=await user.comparePassword(password)
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401))
    }
    sendToken(user,200,res)
})

exports.logout=catchAsyncError(async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    })
    res.status(200).json({
        success:true,
        message:"Logged Out"
    })
})


