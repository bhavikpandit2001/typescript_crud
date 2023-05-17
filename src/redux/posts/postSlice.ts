import { createSlice } from "@reduxjs/toolkit";
import { postprops } from "../../types/Types";

type PostState = {
    posts: postprops[],
    userposts:  postprops[]
}
const initialState: PostState ={
    posts: [],
    userposts: []
}
const postSlice =  createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, {payload}) =>{
            state.posts = payload
        },
        setUserPosts: (state, {payload}) =>{
            state.userposts = payload
        }
    }
})
export const {setPosts, setUserPosts} = postSlice.actions;
export default postSlice.reducer