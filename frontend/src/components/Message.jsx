import React from "react"
import {useRef , useEffect} from "react"
import {useSelector} from "react-redux"
const Message = ({message})=> {
//humne useRef ka use kiya such that ki jabh hum message bhejenge ya recevie krenge toh hum khud thoda scroll krenge voh automatically hona chaiye uske liye iska use kiya hain as tumhare useRef ke andar humne functions milte hain 
   const scroll = useRef()

   const {authUser , selectedUser} = useSelector((store)=>store.user)

   useEffect(()=>{
       scroll.current?.scrollIntoView({behavior:"smooth"})
   } , [message])

    return (
       <div ref={scroll} className={`flex  ${authUser?._id === message?.senderId ? "justify-end": "justify-start"} `} >
          <div className={`flex items-center gap-2 mb-2 mt-2 bg-slate-400 p-2 max-w-[30%] rounded-xl`} >
            {/* //iska mtlb ha condition ki logged in user aur message joh bhej rha ha dono ki id agar same hain toh loggedin user ki photo dikhayenge varna baki message ke liye selecteduser ki photo dikhayenge */}
            <img className="h-12 rounded-full" src={authUser?._id === message?.senderId ? authUser?.profilePhoto : selectedUser?.profilePhoto} />
            <p>{message?.message}</p>
          </div>
       </div>
    )
}

export default Message