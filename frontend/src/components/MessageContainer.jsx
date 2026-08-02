import React from "react"
import SendMessage from "./SendMessage.jsx"
const MessageContainer = () => {
  return (
    <>
      <div className="bg-blue-800 text-white h-screen flex items-center justify-center " >
         <div className="bg-blue-400 relative sm:min-w-[250px] md:min-w-[500px] md:min-h-[544px]  " >
            
              <p className="bg-blue-300 w-1 h-full mb-2 absolute -left-2" ></p>
              <div className="flex items-center gap-3 bg-black  py-2 px-2" >
                <img className="h-12 rounded-full" src="https://imgs.search.brave.com/pIOLfh3y8WMK3sKWzhRwdfvEJ7O8q6jLd7wquyZ5q4k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8w/NS8yMy8wNS80Ny9z/cGlkZXJtYW4tODAx/MTkyOV82NDAucG5n" />
                <p>Shubham Ghai</p>
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