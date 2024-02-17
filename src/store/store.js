import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../redux/userSlice"
import loginSlice from "../redux/loginSlice"
import starSlice from "../redux/starSlice"
import deleteSlice from "../redux/deleteSlice"
import searchSlice from "../redux/searchSlice"

export const store = configureStore({
    reducer:{
        userSlice,
        loginSlice,
        starSlice,
        deleteSlice,
        searchSlice
    }
})

