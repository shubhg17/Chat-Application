import React from "react"
import {useDispatch , useSelector} from "react-redux"
import {setSelectedUser} from "../redux/userSlice.js"
const OtherUser = ({user}) => {
   const {selectedUser} = useSelector((store)=>store.user)
   const dispatch = useDispatch()

  const handleSelectedUser = (user)=> {
      // console.log(user)
      dispatch(setSelectedUser(user))
  }

  return (
    <>
      <div>
        {/* //abh hum kya krenge basically jonsa user selected hain uska background colour change krdenge and jonsa unselected hain uska vese hi rene denge */}
        {/* //and to check which user is selected as hume background colour change krna hain so selecteduser ki id match krni chaiye user ki id se  */}
        <div onClick={()=>handleSelectedUser(user)}  className={`${selectedUser?._id === user?._id ? "bg-blue-200 text-black ": ""}   flex items-center gap-3 hover:bg-blue-200 hover:text-black rounded-md py-2 px-2`} >
          <img className="h-12 rounded-full" src={user.profilePhoto} />
          <p>{user.fullName}</p>
        </div>

      </div>
    </>
  )
}
export default OtherUser