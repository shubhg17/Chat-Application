//redux ko use krne ke liye we will install two packages npm i @reduxjs/toolkit react-redux

import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.js"
const store = configureStore({
    reducer: {
       user:userReducer
    }
})
export default store;