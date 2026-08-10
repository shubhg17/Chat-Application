import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedUser } from "../redux/userSlice.js"
const OtherUser = ({ user }) => {
  const { selectedUser, onlineUsers } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  //yeh onlineUsers ek array hain jisme har online user ki id hain isme hota hain includes method aur yeh user tumhare voh user ha joh side bar pe dikh rhe hain 
  const isOnline = onlineUsers?.includes(user?._id)

  const handleSelectedUser = (user) => {
    // console.log(user)
    dispatch(setSelectedUser(user))
  }

  return (
    <>
      <div>
        {/* //abh hum kya krenge basically jonsa user selected hain uska background colour change krdenge and jonsa unselected hain uska vese hi rene denge */}
        {/* //and to check which user is selected as hume background colour change krna hain so selecteduser ki id match krni chaiye user ki id se  */}
        <div onClick={() => handleSelectedUser(user)} className={`${selectedUser?._id === user?._id ? "bg-blue-200 text-black " : ""}   flex items-center gap-3 hover:bg-blue-200 hover:text-black rounded-md py-2 px-2`} >
          <div className="relative" >
            <img className="h-12 rounded-full " src={user.profilePhoto} />
            <p className={` ${isOnline ? " bg-green-300 h-3 w-3 border border-white p-1 border-2 rounded-full absolute top-1 left-10" : ""}  `} ></p>
          </div>
          <p>{user.fullName}</p>
        </div>

      </div>
    </>
  )
}
export default OtherUser