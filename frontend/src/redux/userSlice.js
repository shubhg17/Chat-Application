import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState: {
       authUser:null,
       otherUsers:null
    },
    reducers: {
       setAuthUser:(state , action)=> {
        //action.payload me argument hume frontend se mil jayega
           state.authUser = action.payload;
       },

       setOtherUsers:(state , action)=> {
           state.otherUsers = action.payload;
       }

    }
})
export const {setAuthUser , setOtherUsers} = userSlice.actions;
export default userSlice.reducer