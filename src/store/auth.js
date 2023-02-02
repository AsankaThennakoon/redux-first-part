
import { createSlice } from "@reduxjs/toolkit";

const initialState={isAuthenticate:false}
const authSlice= createSlice({
name:'auth',
    initialState,
    reducers:{
        logIn(state){
            state.isAuthenticate=true;
        },
        logOut(state){
            state.isAuthenticate=false;
        }
    }
})

export const authAction=authSlice.actions;

export default authSlice.reducer;