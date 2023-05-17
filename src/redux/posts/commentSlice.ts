import { createSlice } from "@reduxjs/toolkit";
import { commentprops } from "../../types/Types";

type commentState = {
    comments: commentprops[]
}
const initialState: commentState ={
    comments: []
}
const commentSlice =  createSlice({
    name: "comments",
    initialState,
    reducers: {
        setComments: (state, {payload}) =>{
            state.comments = payload
        }
    }
})
export const {setComments} = commentSlice.actions;
export default commentSlice.reducer