import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails : {}
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        new_user:(state,action)=>{
           
           state.userDetails[action.payload[0]]=action.payload[1]
        }
    }
})



export const { new_user } = userSlice.actions

export default userSlice.reducer