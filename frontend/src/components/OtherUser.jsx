import React from "react"

const OtherUser = ({user}) => {
   const userData = user;
  return (
    <>
      <div>
        <div className="flex items-center gap-3 hover:bg-blue-200 rounded-md py-2 px-2" >
          <img className="h-12 rounded-full" src={userData.profilePhoto} />
          <p>{userData.fullName}</p>
        </div>

      </div>
    </>
  )
}
export default OtherUser