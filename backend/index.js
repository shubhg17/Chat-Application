// const express = require("express") // method 1 but if u want to do it like import express from "express" like we do in react so add "type" : module in package.json

import express from "express"
import dotenv from "dotenv"
dotenv.config({}) //this helps u to load ur .env file
//install kro cors ko 
import cors from "cors"
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import connectDB from "./config/database.js"
import cookieParser from "cookie-parser"
const app = express();

//middleware for form
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

//yeh hume banana padta ha as hume btana padta ha ki tum kaha se request mar rhe ho joh abhi origin hamara frontend hain as hum frontend origin se backend ke url pe request marenge 
const corsOption = {
    origin:"http://localhost:3000",
    credentials:true
}

app.use(cors(corsOption))

app.use("/user" , userRoute)
app.use("/message" , messageRoute)

//jitni bhi secret cheeze hoti hain like port mongodb url voh sabh hum .env me rkhte hain 
const PORT = process.env.PORT || 9080;

connectDB()

app.listen(PORT , ()=>console.log(`Server Started At Port ${PORT}`))