import {useEffect} from "react"
import {useSelector , useDispatch} from "react-redux"
import {setMessages} from "../redux/messageSlice.js"
const useGetRealTimeMessages = ()=> {
   const {socket} = useSelector((store)=>store.socket)
   const {messages} = useSelector((store)=>store.message)
   const dispatch = useDispatch()
   useEffect(()=>{
        socket?.on("newMessage", (newMessage) => {
            if(messages) {
              //ki basically jabh mere pe messages honge me tabhi usme spread krpaunga kyuki ...null yeh krne se error ayega messages is not iterable isliye isko condition me dispatch krenge 
                dispatch(setMessages([...messages, newMessage]))
            }
           
        })
   } , [socket , setMessages , messages])
}
export default useGetRealTimeMessages