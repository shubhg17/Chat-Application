import React from "react"
import { IoSearch } from "react-icons/io5";
import OtherUsers from "./OtherUsers";
import toast from "react-hot-toast"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {setAuthUser , setOtherUsers} from "../redux/userSlice.js"
import {useState , useEffect} from "react"
import {useSelector} from "react-redux"
function SideBar() {
   const dispatch = useDispatch()
   const navigate  = useNavigate()

   const {otherUsers} = useSelector((store)=>store.user)
   const [filteredUser , setFilteredUser] = useState([])
   const [search , setSearch] = useState("")

   //see hume variable ko ese set krna padega bcuz see component phele render hojayega as otherUsers api call se ayega so usko ane me time lgega as compared to component ke time se component jaldi render hojayega so agar tum pehle hi filteredUser me otherUsers ko set krdoge toh usme empty ajayega and uspe map lagake kuch display nhi hoga so isliye useeffect ki maddat se jabh bhi otherUsers update hoga useeffect run hoga and then change krega fir display hoga data correctly
   useEffect(()=> {
      setFilteredUser(otherUsers)
   } , [otherUsers])


   const handleLogOut = async () => {
      try {
         const response = await axios.get("https://chat-application-cbai.onrender.com/user/logout")
         dispatch(setAuthUser(null))
         dispatch(setOtherUsers(null))
         navigate("/login")
         toast.success(response.data.message)
      }
      catch(error) {
         toast.error(error.response.data.message)
         console.log(error)
      }
   }

   const handleFormSubmit = (e)=> {
      e.preventDefault()
      const filtereduser = otherUsers.filter((otheruser)=> {
         return otheruser.fullName.toLowerCase().includes(search.toLowerCase())
      })

      setFilteredUser(filtereduser)

   }

  return (
    <>
      <div className="bg-blue-800 text-white h-screen flex justify-center items-center" >
        <div className="bg-blue-400  p-4 sm:min-w-[250px] md:min-w-[350px] md:min-h-[450px]" >
          <form onSubmit={handleFormSubmit} >
            <div className="flex mb-2 justify-between" >
              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className="px-3 py-3 pr-10 rounded-md text-black "
                type="text"
                placeholder="Search"
              />
              <button type="submit" className="bg-black flex justify-center text-xl w-full px-4 py-4 rounded-md" >
                <IoSearch />
              </button> 
            </div>
            <p className="bg-blue-300  h-1 w-full mb-2" ></p>
          </form>
          <OtherUsers filteredUser={filteredUser} />
          <button onClick={handleLogOut}  className="bg-blue-800 text-white cursor-pointer font-bold px-4 py-2 rounded-xl" >Logout</button>
        </div>
      </div>
    </>
  )
}
export default SideBar