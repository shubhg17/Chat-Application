import React from "react"
import MessageContainer from "./MessageContainer.jsx"
import SideBar from "./SideBar.jsx"
//we will use react-icons icons ko use krne ke liye so we install npm i react-icons 
const HomePage = () => {
   return (
      <>
         <div>
            <div className="flex justify-center items-center w-full bg-blue-800" >
               <SideBar />
               <MessageContainer />
            </div>

         </div>
      </>
   )
}
export default HomePage