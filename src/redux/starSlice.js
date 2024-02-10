import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    starMessage : []
}

const starSlice = createSlice(
    {
        name:"star",
        initialState,
        reducers:{
            star_message:(state,action)=>{
                state.starMessage.push(action.payload)
                //console.log(action.payload)
            }
        }
    }
)

export const { star_message } = starSlice.actions

export default starSlice.reducer