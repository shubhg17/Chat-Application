import React from "react"
import OtherUser from "./OtherUser"
import axios from "axios"
import {useState} from "react"
import useGetOtherUsers from "../customhook/useGetOtherUsers.jsx"
import {useSelector} from "react-redux"
const OtherUsers = () => {
 
   //my custom hook to get other users 
   useGetOtherUsers()

   const {otherUsers} = useSelector((store)=>store.user)
   //early return in react interview m puchte hain
   if(!otherUsers) return;

  return (
    <>
      <div className="h-[400px]  overflow-auto" >

        {
           otherUsers.map((user)=> {
              return (
                 <OtherUser key={user._id} user={user} />
              )
           })
        }
      </div>
    </>
  )
}
export default OtherUsers