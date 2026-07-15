import mongoose from "mongoose"

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("DB Connected"))
    .catch((error)=>console.log(error))
}

//export default exports one default value so when u will import this into another file u can import it with any name not necessary to write same function name while importing but when we are using named exports like export const connectDB = () => {  console.log("Connected");} then we need to import it with exactly same name we cant change that 
export default connectDB //with export default no braces will be used else braces will be used 

