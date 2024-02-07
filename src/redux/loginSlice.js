import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginDetails : []
}

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        login_user:(state,action)=>{
           
          state.loginDetails.push(action.payload)

        }
    }
})



export const { login_user } = loginSlice.actions

export default loginSlice.reducer