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
   //iss se hum check kr rhe hai ki do users ke beech me conversation pehle se hui toh nhi hain 
   let gotConversation = await Conversation.findOne({
    //iss se tum apne participations vali array me find kroge joh tumne conversationmodel me banayi thi here $all yeh operator kya krta hain ki array me joh bhi id store hogi voh id se find krdega basically jitni bhi ids store hongi uss array me 
    //$in lagayenge toh voh senderID or recevierId yeh ese dhundega aur agar ek bhi milgyi toh document return krdega but hume dono chaiye isliye $all use krenge "participants wali array me ye dono IDs honi chahiye."$all ko order se koi matlab nahi.bas dono milni chaiye order kuch bhi ho 
       participants:{
        $all : [senderId , receiverId]
      }
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

   //Jo changes maine gotConversation object me kiye hain, unhe database me bhi update kar do as gotConversation document ki ek copy ha joh hum gotConversation variable me hold kr rhe hain 
   await gotConversation.save()

   //After above now here we will implement SOCKET.IO

   return res.status(201).json({message: "Message send successfully"})

  } catch (error) {
    console.log(error)
  }
  
}

//abh function joh hum likhenge voh hoga message ko get krne ke liye

export async function getMessage(req , res) {
   try {
    //me apne url ke andar receiver ki id ko basically pass krdunga joh message ko receive krega 
       const receiverId = req.params.id
       const senderId = req.id
       const conversation = await Conversation.findOne({
           participants:{$all : [senderId , receiverId]}
       }).populate("messages") //populate("messages") messages array ko change nahi karta; woh uske andar stored IDs ko actual Message documents se replace kar deta hai. Isliye conversation.messages return karte hi frontend ko saare messages mil jaate hain.

       //this conversation?.messages means ki agar hume conversation model me sender aur receiver ki convo mil jati hain then hum kya krenge unke sare messages ko hum return krdenge as response 
       return res.status(200).json(conversation?.messages)
   }
   catch(error) {
      //to print error
     console.log(error)
   }
}