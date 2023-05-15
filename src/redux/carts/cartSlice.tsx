import { createSlice } from "@reduxjs/toolkit";
import { cartprops } from "../../types/Types";

type  CartState = {
   list: cartprops[],
   usercart: cartprops[]
} 
const initialState: CartState = {
    list:[],
    usercart: []
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        setCarts: (state,{payload})=>{
            state.list = payload;
        },
        setUserCart: (state,{payload}) => {
            state.usercart = payload
        }
    } 

})

export const {setCarts, setUserCart} = userSlice.actions;
export default userSlice.reducer;