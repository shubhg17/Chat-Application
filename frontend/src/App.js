import React from "react"
//to install react we used npx create-react-app 
//React Component

//Backend and frontend dono ki routing alag hoti hain 
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import SignUpPage from "./components/SignUpPage"

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
  return (
    <div >
      {/* //here router is basically inbuilt prop u need to pass ur created router in this router prop only then only it will understand */}
       <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;


