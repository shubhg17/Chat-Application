import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState: {
       authUser:null
    },
    reducers: {
       setAuthUser:(state , action)=> {
        //action.payload me argument hume frontend se mil jayega
           state.authUser = action.payload;
       }
    }
})
export const {setAuthUser} = userSlice.actions;
export default userSlice.reducer