//redux ko use krne ke liye we will install two packages npm i @reduxjs/toolkit react-redux

import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.js"
import messageReducer from "./messageSlice.js"
import socketReducer from "./socketSlice.js"
const store = configureStore({
    reducer: {
       user:userReducer,
       message:messageReducer,
       socket:socketReducer
    }
})
export default store;