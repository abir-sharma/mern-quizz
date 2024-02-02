const app=require("./app")
const path=require('path')
const connectDatabase=require("./backend/config/database")
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server due to Uncaught Exception`)
    server.close(()=>{
        process.exit(1)
    })
})
if (process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({path:"backend/config/config.env"})
}
connectDatabase()


const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is working at : http://localhost:${process.env.PORT}`)
})

process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`)
    console.log(`Shutting down the server due to unhandled promise rejection`)
    server.close(()=>{
        process.exit(1)
    })
})