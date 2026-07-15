// all business logic will be written here all function logic
import { User } from "../models/userModel.js"
import bcrypt from "bcryptjs"
//here u can write anything xyz abc adadad but we write jwt ki pta rhe ki kya use kr rhe hain 
import jwt from "jsonwebtoken"

export const signup = async (req , res) => {
  //always try to use trycatch block its a good practice
  try {
    const { fullName, userName, password, gender , confirmPassword } = req.body
    if (!fullName || !userName || !password || !gender || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" })
    }

    if(password !== confirmPassword) {
       return res.status(400).json({message: "Password does not match"})
    }

    const user = await User.findOne({ userName })
    if (user) return res.status(400).json({ message: "Username already exists" })

    //hum password ko direclty nhi bhejenge ham password ko hash krke bhejenge for security reasons  phele await krlo then bcrypt.hash() isme 2 cheeze pass kro first kis pass ko hash krna hain and second salt basically tumhari length joh hogi hashed password ki length jitni lambi hogi utna password strong hoga bydefault hum 10 dete hain
    const hashedPassword = await bcrypt.hash(password, 10)

    //lets divide profilePhoto into male and female
    const maleProfilePhoto = "https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
    const femaleProfilePhoto = "https://images.unsplash.com/photo-1740252117027-4275d3f84385?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVtYWxlJTIwYXZhdGFyfGVufDB8fDB8fHww"
    await User.create({
      fullName,
      userName,
      password: hashedPassword,
      profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
      gender
   })

    return res.status(201).json({message:"user created successfully"})

  } catch (error) {
    console.log(error)
  }

}

export async function login(req , res) {
   try {
     const {userName , password} = req.body
     if(!userName || !password) return res.status(400).json({message: "All fields are required"})

    const user = await User.findOne({userName})
    if(!user) {
       return res.status(400).json({message: "Invalid Username or Password"})
    }

    const isPasswordSame = await bcrypt.compare(password , user.password)
    if(!isPasswordSame) {
        return res.status(400).json({message: "Invalid Username or Password"})
    }

    //idhar agye means user loggedin hain toh ham user ke liye token generate krenge aur cookie banayenge and token ki maddat se hi hum authorization and authentication kr payenge so for that install npm i jsonwebtoken
    const tokenData = {
       userId: user._id
    }

    //first parameter hoga joh voh hoga token ka data joh  tumne create kiya usko pass kro  and second parameter joh hum pass krenge voh hoga secret key but it should also be hidden so hum usko .env me rkhenge and here {expiresIn: "1d"} it means ki 1 din me token expire hojayega 
    const token = await jwt.sign(tokenData , process.env.JWT_SECRET_KEY , {expiresIn:"1d"})

    //maxAge me humne daldiya ek din ka ki ek din baad yeh cookie khatam hojayegi and httpOnly and sameSite also daldiye for security purposes 1d ko mathematically hum ese likhenge 1*(total no of hrs in a day)*(total minutes in one hour)*(total no of seconds in one minute)*(1s me 1000 ms hote hain)
    res.cookie("token" , token  , {maxAge:1*24*60*60*1000 , httpOnly:true , sameSite:"strict" })

    return res.status(200).json({message:"User LoggedIn Successfully"})

     
   }
   catch(error) {
     console.log(error)
   }
}

export const logout = (req  , res) => {
    try {
      //maxAge:0 ki yeh cookie 0 time ke liye store hogi mtlb nhi hogi 
        res.cookie("token" , "" , {maxAge:0});
        return res.status(200).json({message: "user loggedout successfully"})
    }
    catch(error) {
       console.log(error)
    }
    
}

//yeh function hain hamara ki jabh basically user login hoga toh usko voh sare users dikhne chaiye jiske sath usne chat kri thi 

export const getOtherUsers = async(req , res)=> {
   try {
      const loggedInUserId = req.id 
      //otherUsers wali array me kya ayega voh sare users jinki id loggedinuser se match nhi hoti voh ajayenge  {_id:{$ne:loggedInUserId}}  here it means ki database me har user ke pass ek _id nam ki key hoti ha so har user ke liye $ne means jiski id match nhi krti and pass krdiya kiss se match nhi krti loggedInUserId and hum jabh sare users lekar ayenge toh unke password nhi leke ayenge that is what we are doing with select as frontend pe user jabh dikhaoge toh pass thoda dikhaoge data leak hojayega 
      const otherUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password")
      return res.status(200).json(otherUsers)
   }
   catch(error) {
     console.log(error)
   }
}