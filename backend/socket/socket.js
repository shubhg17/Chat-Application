//to implement socketfirst install socket using npm i socket.io

import {Server} from "socket.io"
import express from "express"
import http from "http"

const app = express()
const server = http.createServer(app)
//io banate hue yeh bhi pass krenge in form of object
const io = new Server(server, {
   cors: {
       origin: "http://localhost:3000",
       methods: ["GET", "POST"],
       credentials: true
   }
})

//so hum yaha ek map banayega map vohi dsa vala key value pairs jisme hum user ki id and uski socket id rkhenge and yeh sirf loggedin users ke liye hum banayenge logged out users ke liye nhi 

const userSocketMap = {}  // {userId->socketId}


io.on("connection" , (socket)=>{
   console.log("user connected" , socket.id)
   //socket me ek method hota hain handshake krke and usme se query nikali and then userId  this is basically loggedin user id 
   const userId = socket.handshake.query.userId
   //loggedin user ko map krdiya where key is userId and value is socket.id
   if(userId) userSocketMap[userId] = socket.id

   //backend ne frontend pe pass krdiya 
   io.emit("getOnlineUsers" , Object.keys(userSocketMap))

   //socket ke andar hame yeh disconnect milta hain jisko ese use krte hain yeh uske liye hain ki jabh user logout hoga nah 
   socket.on("disconnect" , ()=> {
     console.log("user disconnected" , socket.id)
     delete userSocketMap[userId] // map se bhi hatayenge as map me ham sirf loggedinuser and unki socketids rkh rhe hain
     io.emit("getOnlineUsers" , Object.keys(userSocketMap)) // dubara yeh likhna padega as jabh user delete hoga joh logged out hain toh map update hoga toh voh updated map ko bhejna padega 
   })

})

//export krdenge io ko server ko and app ko
export {app , io , server}