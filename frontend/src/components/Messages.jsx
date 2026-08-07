import React from "react"
import Message from "./Message.jsx"
import useGetMessages from "../customhook/useGetMessages.jsx"
import {useSelector} from "react-redux"
const Messages = ()=> {
    //  console.log("Messages Rendered");
    useGetMessages()
    
    const {messages}  = useSelector((store)=>store.message)
    if(!messages) return; //early return in react
    return (
       <div className="px-4 flex-1 h-[400px]  overflow-auto" >

        {
          messages?.map((message)=>{
              return (
                 <Message key={message._id} message={message}  />
              )
          })
        }
       </div>
    )
}

export default Messages