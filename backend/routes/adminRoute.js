const express=require("express")
const {createQuizz,getQuizzes,getQuizzDetails}=require("../controller/quizzController")
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth")
const router=express.Router()

router.route("/createQuizz").post(isAuthenticatedUser,authorizeRoles("admin"), createQuizz)
router.route("/getQuizzes").get(isAuthenticatedUser, getQuizzes)
router.route("/quizz/:id").get(isAuthenticatedUser,getQuizzDetails)


module.exports=router