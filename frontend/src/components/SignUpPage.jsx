
import React from "react"
import {Link} from "react-router-dom"
//with this hook u can navigate easily also this is also one way to route
import {useNavigate} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
import toast from "react-hot-toast"
//axios basically ek tool hain joh hume help krta ha apis ko call krne me to use this install npm i axios and we are also installing react-hot-toast using npm i react-hot-toast
//axios me hume data automatically json me milta hain this is better than fetchAPI error handling bhi better hoti ha isme

const SignUp = () => {
   const [user , setUser]  = useState({
      fullName:"",
      userName:"",
      password:"",
      confirmPassword:"",
      gender:""
   })

   const navigate = useNavigate()
  
   const handleFormSubmit = async (e)=> {
       e.preventDefault();
      //  console.log(user) 
      //form submit hone ke baad input fields ko khali krdiya

      try {
         //axios me joh data ata hain voh json m hi hota hain 
         //here second parameter voh hain joh hume hamare api me add krvana hain 
         const response = await axios.post("https://chat-application-cbai.onrender.com/user/signup" , user , {
            //cors policy ka error nah aye isliye yeh sab pass krte hain 
             headers: {
                "Content-Type" : "application/json"
             },
             withCredentials:true
         })
         // console.log(response)
         if(response.data.message) {
            //toast ke andar ek method hota hain success krke
             toast.success(response.data.message)
             navigate("/")
         }
      }
      catch(error) {
          toast.error(error.response.data.message)
          console.log(error)
      }

      setUser({
         fullName:"",
         userName:"",
         password:"",
         confirmPassword:"",
         gender:""
      })
   }

   const handleCheckBox = (gender)=> {
       setUser({...user , gender})
   }

   return (
      <>
         <div className="bg-blue-800 text-white h-screen  flex justify-center items-center ">
            <div className="bg-blue-400 p-6 py-10 rounded-3xl w-[30%]" >
               <form onSubmit={handleFormSubmit} >
                  <h1 className="text-white  text-5xl text-center mb-10 font-bold" >SignUp</h1>
                  <div>
                     <p className="font-semibold text-xl mb-1" >Full Name</p>
                     <input
                        value={user.fullName}
                        onChange={(e)=>setUser({...user , fullName:e.target.value})}
                        className="bg-white rounded-md w-full px-2 py-2 mb-3 text-black"
                        type="text"
                        placeholder="Enter your fullname"
                     />
                  </div>
                  <div>
                     <p className="font-semibold text-xl mb-1" >User Name</p>
                     <input
                        value={user.userName}
                        onChange={(e)=>setUser({...user , userName:e.target.value})}
                        className="bg-white rounded-md w-full px-2 py-2 mb-3 text-black"
                        type="text"
                        placeholder="Enter your username"
                     />
                  </div>
                  <div>
                     <p className="font-semibold text-xl mb-1" >Password</p>
                     <input
                        value={user.password}
                        onChange={(e)=>setUser({...user , password:e.target.value})}
                        className="bg-white rounded-md w-full px-2 py-2 mb-3 text-black"
                        type="password"
                        placeholder="Enter your password"
                     />
                  </div>
                  <div>
                     <p className="font-semibold text-xl mb-1" >Confirm Password</p>
                     <input
                        value={user.confirmPassword}
                        onChange={(e)=>setUser({...user , confirmPassword:e.target.value})}
                        className="bg-white rounded-md w-full px-2 py-2 text-black"
                        type="password"
                        placeholder="Enter your password"
                     />
                  </div>
                  <div className="flex gap-4 mb-3" > 
                     <div className="flex gap-2" >
                        <p className="font-semibold" >Male</p>
                        <input
                        //hume isme ek checked attribute milta hain like value 
                           checked={user.gender === "male"}
                           onChange={()=>handleCheckBox("male")}
                           type="checkbox"
                        />
                     </div>
                     <div className="flex gap-2" >
                        <p className="font-semibold">Female</p>
                        <input
                           checked={user.gender === "female"}
                           onChange={()=>handleCheckBox("female")}
                           type="checkbox"
                        />
                     </div>
                  </div>

                   <p className="text-center font-semibold text-xl mb-3" >Already have an account ? <Link to="/login" >Login</Link> </p>

                   <button type="submit" className="text-xl font-semibold text-black bg-white w-full p-2 rounded-xl active:scale-90 " >SignUp</button>

               </form>
            </div>
         </div>
      </>
   )
}
export default SignUp