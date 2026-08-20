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
import {app , server} from "./socket/socket.js"
//yeh path module nodejs me by default hota hain 
import path from "path"
// const app = express();

//with this tume backend ka path miljayega folder ka joh hover krke arha hain or basically voh folder kaha ha laptop me 
const _dirname = path.resolve()

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

//with this hum apni frontend ki files ko serve krenge using backend and here in path module join is a method where u first pass ur backend directoryname and second is frontend folder and /dist here dist tumhara create hoga jabh yeh deploy hoga usme tumhara sara code ajata hain 
app.use(express.static(path.join(_dirname , "/frontend/build")))

//* here represents sare routes ko chodke  and _ hum dalskte hain jese agar req ka koi use nhi hain toh yeh dalskte hain 
app.get("/*splat" , (_ , res)=> {
    //with this tumne apni index.html frontend file ko serve krdiya 
    res.sendFile(path.resolve(_dirname , "frontend" , "build" , "index.html"))
})

server.listen(PORT , ()=>console.log(`Server Started At Port ${PORT}`))