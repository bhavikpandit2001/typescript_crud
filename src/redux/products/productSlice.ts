import { createSlice } from "@reduxjs/toolkit";
import { productprops } from "../../types/Types";

type  ProductState = {
   list: productprops[]
} 
const initialState: ProductState = {
    list:[]
}

const userSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        setProducts: (state,{payload})=>{
            state.list = payload;
        }
    } 

})

export const {setProducts} = userSlice.actions;
export default userSlice.reducer;