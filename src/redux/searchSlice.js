import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchMessage : ""
}

const searchSlice = createSlice(
    {
        name:"search",
        initialState,
        reducers:{
            search_message:(state,action)=>{
                state.searchMessage = action.payload;
                console.log(action.payload)
            }
        }
    }
)

export const { search_message } = searchSlice.actions

export default searchSlice.reducer