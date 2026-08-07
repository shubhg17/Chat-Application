import React from "react"
import {useState} from "react"
import { LuSendHorizontal } from "react-icons/lu";
import axios from "axios"
import {useSelector , useDispatch} from "react-redux"
import {setMessages} from "../redux/messageSlice.js"
const SendMessage = () => {
  const dispatch = useDispatch()
  const [message , setMessage] = useState("")
  const {selectedUser} = useSelector((store)=>store.user)
  const {messages} = useSelector((store)=>store.message)

  const handleFormSubmit = async (e)=> {
     e.preventDefault()
     try {
       const response = await axios.post(`http://localhost:8080/message/send/${selectedUser?._id}` , {message} , {
          //yeh headers pass krna optional hain but withCredentials dena important hain 
          headers: {
             "Content-Type" : "application/json"
          },
          withCredentials:true
       })
       dispatch(setMessages([...messages , response.data.newMessage]))
       console.log(response)
       setMessage("")
     }
     catch(error) {
       console.log(error)
     }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} >
        <div className="relative" >
          <input
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            className="mt-2 px-3 py-3 pr-10 rounded-md w-full text-black"
            type="text"
            placeholder="Send a message"
          />
          <button type="submit" className="text-black text-xl absolute right-3 top-5" type="submit">
            <LuSendHorizontal />
          </button>
        </div>
      </form>

    </div>
  )
}
export default SendMessage