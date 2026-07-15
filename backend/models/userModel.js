import mongoose from "mongoose"

const userSchema = mongoose.Schema({
   fullName: {
     type:String,
     required:true
   },
   userName: {
      type:String,
      required:true,
      unique:true
   },
   password: {
      type:String,
      required:true
   },
   profilePhoto: {
      type:String,
      default:""
   },
   gender: {
      type:String,
      //with the help of enum u can store multiple values for that we use enum
      enum:["male" , "female"],
      required:true
   }
} , {timestamps:true})

//this is named export
export const User = mongoose.model("User" , userSchema);