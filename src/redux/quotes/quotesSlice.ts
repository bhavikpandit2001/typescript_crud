import { createSlice } from "@reduxjs/toolkit";
import { quotesprops } from "../../types/Types";

type QuotesState =  {
    list: quotesprops[]
}
const initialState: QuotesState = {
    list: []
}
const quotesSlice = createSlice({
    name: "quotes",
    initialState,
    reducers: {
        setQuotes: (state, {payload}) =>{
            state.list = payload;
        }
    }
})
export const {setQuotes} = quotesSlice.actions;
export default quotesSlice.reducer;