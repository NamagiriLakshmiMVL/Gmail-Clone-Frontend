import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deleteMessage : []
}

const deleteSlice = createSlice(
    {
        name:"delete",
        initialState,
        reducers:{
            delete_message:(state,action)=>{
                state.deleteMessage.push(action.payload)
                console.log(action.payload)
            }
        }
    }
)

export const { delete_message } = deleteSlice.actions

export default deleteSlice.reducer