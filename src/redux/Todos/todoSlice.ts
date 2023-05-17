import { createSlice } from "@reduxjs/toolkit";
import { todosprops } from "../../types/Types";

type TodosState ={
    todos: todosprops[],
    usertodos: todosprops[]
}

const initialState: TodosState = {
    todos: [],
    usertodos: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setTodos: (state, {payload}) =>{
            state.todos = payload
        },
        setUserTodos: (state, {payload}) =>{
            state.usertodos = payload
        }
    }
})
export const {setTodos, setUserTodos} = todoSlice.actions;
export default todoSlice.reducer;