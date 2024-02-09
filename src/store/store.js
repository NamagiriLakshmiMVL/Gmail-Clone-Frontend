import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../redux/userSlice"
import loginSlice from "../redux/loginSlice"
import starSlice from "../redux/starSlice"

export const store = configureStore({
    reducer:{
        userSlice,
        loginSlice,
        starSlice
    }
})

