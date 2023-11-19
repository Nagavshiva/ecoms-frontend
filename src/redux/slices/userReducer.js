import { createSlice } from "@reduxjs/toolkit";
import * as userActions from "../actions/userActions";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:JSON.parse(localStorage.getItem("user")) ?? null,
        loading: false,
        error: null,
    },
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            localStorage.removeItem("user"); // Remove user data from local storage
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userActions.loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(userActions.loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                // Save user data to local storage
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(userActions.loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

        builder
            .addCase(userActions.registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(userActions.registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                // Save user data to local storage
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(userActions.registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})
export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;