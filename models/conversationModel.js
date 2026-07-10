import mongoose from "mongoose"

const conversationSchema = mongoose.Schema({
  //participants humari ek array hogi jisme hamare pe participation ki id hogi so basically hume relationship establish krna hoga usermodel ke sath as participation toh user hi hoga nah  and same for messages vali array me hamare pas message ki id hogi so hume relationship establish krna hoga messageModel ke sath
   participants:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
   }],

   messages: [{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Message"
   }]
} , {timestamps:true})

export const Conversation = mongoose.model("Conversation" , conversationSchema)