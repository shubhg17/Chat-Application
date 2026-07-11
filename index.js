// const express = require("express") // method 1 but if u want to do it like import express from "express" like we do in react so add "type" : module in package.json

import express from "express"
import dotenv from "dotenv"
dotenv.config({}) //this helps u to load ur .env file

import userRoute from "./routes/userRoute.js"

import connectDB from "./config/database.js"
import cookieParser from "cookie-parser"
const app = express();

app.use(express.json())
app.use(cookieParser())
app.use("/user" , userRoute)

//jitni bhi secret cheeze hoti hain like port mongodb url voh sabh hum .env me rkhte hain 
const PORT = process.env.PORT || 9080;

connectDB()

app.listen(PORT , ()=>console.log(`Server Started At Port ${PORT}`))