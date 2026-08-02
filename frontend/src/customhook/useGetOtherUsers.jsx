import React from "react"
import {useEffect} from "react"
import axios from "axios" 
import {setOtherUsers} from "../redux/userSlice.js"
import {useDispatch} from "react-redux"
const useGetOtherUsers = () => {
    useEffect(()=> {
       fetchData()
    }, [])

    const dispatch = useDispatch()

   const fetchData = async () => {
       try {
        //yeh hume dalna pad rha ha as jis url pe hum networkcall krrhe hain usme humne ek inline middleware use kiya tha so jabh bhi ese inline middleware use krte hain toh yeh likhna padta hain 
          axios.defaults.withCredentials = true;
          const response = await axios.get("http://localhost:8080/user")
          // console.log(response)
          dispatch(setOtherUsers(response.data))
       }
       catch(error) {
         console.log(error)
       }
   }
}
export default useGetOtherUsers