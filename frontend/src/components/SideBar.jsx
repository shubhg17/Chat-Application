import React from "react"
import { IoSearch } from "react-icons/io5";
import OtherUsers from "./OtherUsers";
import toast from "react-hot-toast"
import axios from "axios"
import {useNavigate} from "react-router-dom"
function SideBar() {

   const navigate  = useNavigate()

   const handleLogOut = async () => {
      try {
         const response = await axios.get("http://localhost:8080/user/logout")
         navigate("/login")
         toast.success(response.data.message)
      }
      catch(error) {
         toast.error(error.response.data.message)
         console.log(error)
      }
   }

  return (
    <>
      <div className="bg-blue-800 text-white h-screen flex justify-center items-center" >
        <div className="bg-blue-400  p-4 sm:min-w-[250px] md:min-w-[350px] md:min-h-[450px]" >
          <form>
            <div className="flex mb-2 justify-between" >
              <input
                className="px-3 py-3 pr-10 rounded-md "
                type="text"
                placeholder="Search"
              />
              <button type="submit" className="bg-black flex justify-center text-xl w-full px-4 py-4 rounded-md" >
                <IoSearch />
              </button> 
            </div>
            <p className="bg-blue-300  h-1 w-full mb-2" ></p>
          </form>
          <OtherUsers/>
          <button onClick={handleLogOut}  className="bg-blue-800 text-white cursor-pointer font-bold px-4 py-2 rounded-xl" >Logout</button>
        </div>
      </div>
    </>
  )
}
export default SideBar