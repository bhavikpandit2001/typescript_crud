import { createSlice } from "@reduxjs/toolkit";
import { userprops } from "../../types/Types";

type  UserState = {
   list: userprops[],
   
} 
const initialState: UserState = {
    list:[],

}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        setUsers: (state,{payload})=>{
            state.list = payload;
        },
        
    } 

})

export const {setUsers} = userSlice.actions;
export default userSlice.reducer;