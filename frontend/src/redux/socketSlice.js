import {createSlice} from "@reduxjs/toolkit"

const socketSlice = createSlice({
    name:"socket",
    initialState: {
       socket: null
       //onlineUsers users ka part ha so usko hum userSlice me rkhenge
    },
    reducers: {
       setSocket:(state , action)=> {
          state.socket = action.payload;
       }
    }
})
export const {setSocket}  = socketSlice.actions
export default socketSlice.reducer