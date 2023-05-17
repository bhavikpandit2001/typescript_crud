import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FormValues } from "../../types/Types";

type AuthState = {
    isLoggedIn: boolean,
    auth: FormValues,
}

const initialState: AuthState = {
    isLoggedIn: false,
    auth: {
        username: "",
        password: ""
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.auth = action.payload;
            axios.defaults.headers.common["Authorization"] = action.payload.token;
            let token =  JSON.stringify(action.payload.token)
            console.log(token);
            localStorage.setItem("user-token", token );
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.auth = {
                username: "",
                password: ""
            }
            delete axios.defaults.headers.common['Authorization']
            localStorage.removeItem("user-token");
            state.isLoggedIn = false;
        }
    }

})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;