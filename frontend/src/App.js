import React from "react"
//to install react we used npx create-react-app 
//React Component

//Backend and frontend dono ki routing alag hoti hain 
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import SignUpPage from "./components/SignUpPage"

import { useEffect } from "react"
import {useSelector , useDispatch} from "react-redux"
import {setOnlineUsers} from "./redux/userSlice.js"
import io from "socket.io-client"
import {setSocket} from "./redux/socketSlice.js"

//to get these things install npm i react-router-dom
import {createBrowserRouter , RouterProvider} from "react-router-dom"

//here function const nhi hain isliye hum yeh approuter upar bana parhe hain
//isme hume pass krna hota hain ek array and usme multiple objects fir hum pass krte hain
const appRouter = createBrowserRouter([
   {
     path : "/",
     element : <HomePage/>
   },
   {
     path : "/signup",
     element:<SignUpPage/>
   },
   {
     path : "/login",
     element:<LoginPage/>
   },

])

function App() {
   const {authUser} = useSelector((store)=>store.user)
   const {socket} = useSelector(store=>store.socket)
   const dispatch = useDispatch()
   useEffect(()=> {
    //hum socket connection tabhi banayenge jabh hamare pas user hogaloggedin wala as tabhi toh tum user ke messages and user ka status offline or online wala show kroge 
    console.log(authUser)
     if(authUser) {
      //iss io ke andar hume pass krna hota hain hamara backend ka url jispe listen kr rhe hain 
        const socket = io("http://localhost:8080" , {
           //here hamare pas ek query parameter hota hain 
           query: {
             userId:authUser._id
           }
        })

        //iss socket ko bhi hum apne store me add krenge
        dispatch(setSocket(socket))

       //hume yaha pe hamare voh onlineUsers chaiye toh tum normal state variable  se handle krskte ho ya tum redux se kr sktte ho  hume onlineUsers ko toh store me rkhenge hi hume apne socket ko bhi store me rkhna hota hain so humne ek aur slice banaliya socketSlice.js krke 
       socket.on("getOnlineUsers" , (onlineUsers)=> {
          dispatch(setOnlineUsers(onlineUsers))
       })
       //cleanup useeffect
       return ()=>socket.close() // yeh socket.close() tumhare voh disconnect ko call krdega and fir usko run krega as jabh tum app ko chod ke jaoge then disconnect hojana chaiye 
     }
     else { //mtlb authUser nhi hain merepas this is optional 
       
       if(socket) {
         socket.close();
         dispatch(setSocket(null))
       }
        
     }
   } , [authUser])

  return (
    <div >
      {/* //here router is basically inbuilt prop u need to pass ur created router in this router prop only then only it will understand */}
       <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;


