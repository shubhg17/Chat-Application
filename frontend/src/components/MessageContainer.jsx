import React from "react"
import SendMessage from "./SendMessage.jsx"
import Messages from "./Messages.jsx"
import {useSelector} from "react-redux"
const MessageContainer = () => {

   const {selectedUser} = useSelector((store)=>store.user)

  return (
    <>
      <div className="bg-blue-800 text-white h-screen flex items-center justify-center " >
         <div className="bg-blue-400 relative sm:min-w-[250px] md:min-w-[500px] md:min-h-[544px]  " >
            
              <p className="bg-blue-300 w-1 h-full mb-2 absolute -left-2" ></p>
              <div className="flex items-center gap-3 bg-black  py-2 px-2" >
                <img className="h-12 rounded-full" src={selectedUser?.profilePhoto} />
                <p>{selectedUser?.fullName}</p>
             </div>

             <div>
               <Messages/>
             </div>

             <div className="absolute bottom-2 w-[480px] ml-2" >
              <SendMessage/>
             </div>

             
        </div>
      </div>
    </>
  )
}
export default MessageContainer