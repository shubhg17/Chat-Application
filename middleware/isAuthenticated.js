import jwt from "jsonwebtoken"
const isAuthenticated = async (req , res , next)=>  {
  try {
    const token = req.cookies?.token
    if(!token) return res.status(401).json({message: "User not authenticated"})
      //jwt.verify() isme 2 params pass kro first apna token and apni secret key secret key se hi basically yeh verify krta hain
    const decode = await jwt.verify(token , process.env.JWT_SECRET_KEY)
    if(!decode) return res.status(401).json({message: "Invalid Token"})
    //agar match hoga toh yaha aoge and yeh decode kya contain krega hamare token ke data basically joh payload ki humne token me kya data diya tha 
   
    //abh hum request object ke andar ek key banado and usme loggedin user ki id ko daldo joh hum kisi aur jagah uss kr paye
    req.id = decode.userId
    next()
  }
  catch(error) {
     console.log(error)
  } 
}
export default isAuthenticated