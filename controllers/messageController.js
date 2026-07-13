import { Conversation } from "../models/conversationModel.js";
import {Message} from "../models/messageModel.js"
export const sendMessage = async(req , res) => {
  try {
    //sender ki id basically uss user ki hi hogi joh loggedin hain 
   const senderId = req.id;
   //as tum route me id receiver ki bhejoge so vaha se fetch krli 
   const receiverId = req.params.id
   const {message} = req.body
   //sabse phele hum users ke beech me communication establish krenge

   //with this we are finding ki conversation kis kis ke beech me chl rhi hain 
   let gotConversation = await Conversation.findOne({
    //iss se tum apne participations vali array me find kroge joh tumne conversationmodel me banayi thi here $all yeh operator kya krta hain ki array me joh bhi id store hogi voh id se find krdega basically jitni bhi ids store hongi uss array me 
       participants:{$all : [senderId , receiverId]}
   })
    
   //ki agar conversation nhi hogi nah tabhi basically tum conversation ek create kroge and iss variable me change krdenge tbhi let use kiya not const
   if(!gotConversation)  {
      gotConversation  = await Conversation.create({
         participants:[senderId , recevierId]
      })
   }

   const newMessage = await Message.create({
     senderId,
     receiverId,
     message
   })
    
   //agar message ha toh uss message ki id ko tum apne conversationModel me joh tumne messages vali array banayi thi usme daldenge uss message ki id ko 
   if(newMessage) {
      gotConversation.messages.push(newMessage._id)
   }

   await gotConversation.save()

   //After above now here we will implement SOCKET.IO

   return res.status(201).json({message: "Message send successfully"})

  } catch (error) {
    console.log(error)
  }
  
}