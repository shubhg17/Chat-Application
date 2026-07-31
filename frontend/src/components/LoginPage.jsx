import React from "react"
import {Link} from "react-router-dom"
import {useState} from "react"
function LoginPage() {
    const [user , setUser] = useState({
       userName:"",
       password:""
    })

    const handleFormSubmit = (e)=> {
       e.preventDefault()
       console.log(user)
    }

    return (
       <>
         <div className="bg-blue-800 text-white h-screen  flex justify-center items-center ">
            <div className="bg-blue-400 p-6 py-10 rounded-3xl w-[30%]" >
               <form onSubmit={handleFormSubmit} >
                  <h1 className="text-white  text-5xl text-center mb-10 font-bold" >Login</h1>
                  <div>
                     <p className="font-semibold text-xl mb-1" >User Name</p>
                     <input
                        value={user.username}
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

                   <p className="text-center font-semibold text-xl mb-2" >Don't have an account ? <Link to="/signup" >SignUp</Link> </p>

                   <button type="submit" className="text-xl font-semibold text-black bg-white w-full p-2 rounded-xl" >Login</button>
                   

               </form>
            </div>
         </div>
       </>
    )
}
export default LoginPage