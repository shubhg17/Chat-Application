// const express = require("express") // method 1 but if u want to do it like import express from "express" like we do in react so add "type" : module in package.json

import express from "express"
import dotenv from "dotenv"
dotenv.config({}) //this helps u to load ur .env file

import connectDB from "./config/database.js"

const app = express();

//jitni bhi secret cheeze hoti hain like port mongodb url voh sabh hum .env me rkhte hain 
const PORT = process.env.PORT || 9080;

connectDB()

app.listen(PORT , ()=>console.log(`Server Started At Port ${PORT}`))