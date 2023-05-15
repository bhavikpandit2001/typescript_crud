import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth/authSlice";
import cartSlice from "./carts/cartSlice";
import commentSlice from "./posts/commentSlice";
import postSlice from "./posts/postSlice";
import productSlice from "./products/productSlice";
import quotesSlice from "./quotes/quotesSlice";
import todoSlice from "./Todos/todoSlice";
import userSlice from "./user/userSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    users: userSlice,
    products: productSlice,
    carts: cartSlice,
    quotes: quotesSlice,
    todos: todoSlice,
    posts: postSlice,
    comments: commentSlice,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch