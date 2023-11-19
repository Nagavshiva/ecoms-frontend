import {createAsyncThunk} from "@reduxjs/toolkit";
import userService from "../services/userService";


export const loginUser = createAsyncThunk('user/loginUser',async(userData)=>{
    const response = await userService.loginUser(userData);
    return response.data;
})


export const registerUser = createAsyncThunk('user/registerUser', async (userData) => {
    const response = await userService.registerUser(userData);
    return response.data;
  });