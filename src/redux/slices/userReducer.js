import { createSlice } from "@reduxjs/toolkit";
import * as userActions from "../actions/userActions";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) ?? null,
        isLoggedIn: !!JSON.parse(localStorage.getItem("user")),
        loading: false,
        error: null,
    },
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            localStorage.removeItem("user"); // Remove user data from local storage
            state.isLoggedIn = false; 
        },
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
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
                state.isLoggedIn = true;
                state.error = null;
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
                state.isLoggedIn = true;
            })
            .addCase(userActions.registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})
export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;