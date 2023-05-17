import { createSlice } from "@reduxjs/toolkit";
import { orderprops } from "../../types/Types";

type  OrderState = {
   list: orderprops[],
} 
const initialState: OrderState = {
    list:[],
    
}

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers:{
        setOrders: (state,{payload})=>{
            state.list.push(payload)
        },
        removeOrders: (state,{payload}) => {
            state.list.pop()
        }
    } 

})

export const {setOrders, removeOrders} = orderSlice.actions;
export default orderSlice.reducer;