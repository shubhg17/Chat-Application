import React from "react"
import SendMessage from "./SendMessage.jsx"
import Messages from "./Messages.jsx"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { setSelectedUser  } from "../redux/userSlice.js"
const MessageContainer = () => {

  const dispatch = useDispatch()

  const { selectedUser , authUser } = useSelector((store) => store.user)

  //basically jabh hum logout pe click krenge but still selectedUser tumhara khali nhi horha toh hume cleanup krna padega with help of useEffect or tum store ko bhi khali krskte ho both are correct hum cleanup se krenge such that to learn some new things 

  useEffect(() => {
    //cleanup krne ke liye we use return keyword and hume ek callback fn ko return krte hain 
    //navigate() // basically jabh tum logout kroge toh tumhara route hain voh change hoga as tum navigate kroge homepage se login page selecteduser kohumne yaha handle krliya but authUser ko yaha handle nhi krenge as agar manlo tum kisi aur page pe jate ho aur agar cleanup krdiya so dusre page pe jate hi tum logout hojaoge so usko handle krliya logout api call jaha kr rhe hain 
    // ↓
    // Route changes
    //       ↓
    // Component unmounts
    //       ↓
    // Cleanup executes
    return () => dispatch(setSelectedUser(null))
  }, [])

  return (
    <>
      {
        selectedUser !== null ?  (<div className="bg-blue-800 text-white h-screen flex items-center justify-center " >
          <div className="bg-blue-400 relative sm:min-w-[250px] md:min-w-[500px] md:min-h-[544px]  " >

            <p className="bg-blue-300 w-1 h-full mb-2 absolute -left-2" ></p>
            <div className="flex items-center gap-3 bg-black  py-2 px-2" >
              <img className="h-12 rounded-full" src={selectedUser?.profilePhoto} />
              <p>{selectedUser?.fullName}</p>
            </div>

            <div>
              <Messages />
            </div>

            <div className="absolute bottom-2 w-[480px] ml-2" >
              <SendMessage />
            </div>
          </div>
        </div>) :
          (
            <div className="bg-blue-300 text-white flex flex-col items-center justify-center  sm:min-w-[250px] md:min-w-[500px] md:min-h-[544px]  " >
                
                <h1 className="text-4xl font-bold" >Hi,{authUser?.fullName} </h1>
                <h1 className="text-2xl" >Let's Start a Conversation</h1>
            </div>
          )
      }

      

    </>
  )
}
export default MessageContainer