import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../redux/userSlice"
import loginSlice from "../redux/loginSlice"

export const store = configureStore({
    reducer:{
        userSlice,
        loginSlice
    }
})

