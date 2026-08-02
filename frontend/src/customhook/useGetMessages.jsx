import React from "react"
import {useEffect} from "react"
import axios from "axios"
import {useSelector , useDispatch} from "react-redux"
import {setMessages} from "../redux/messageSlice.js"
const useGetMessages = ()=> {
    const dispatch = useDispatch()
    // console.log("fetchData called");
    const {selectedUser} = useSelector((store)=>store.user)
    // console.log(selectedUser);
    useEffect(()=> {
      // console.log("useEffect running");
      fetchData()
    } , [selectedUser])


    const fetchData = async ()=> {
        try {
          //iske andar hum id pass krenge dynamic joh hogi basically hamare selecteduser ki and hume us particular user ka data miljayega jisko hum select krenge so data ko get krne ke liye yeh api call krenge getmessage ki joh banayi thi backend ke same vaha se data ajayega
           axios.defaults.withCredentials = true
           const response  = await axios.get(`http://localhost:8080/message/${selectedUser?._id}`)
           console.log(response)
           dispatch(setMessages(response.data))
        }
        catch(error) {
           console.log(error)
        }
    }
}
export default useGetMessages