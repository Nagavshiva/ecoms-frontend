import { createSlice } from '@reduxjs/toolkit';
import { fetchAllUsers, deleteUserById } from '../actions/adminActions';

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        users: [], // State property to store the list of users
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteUserById.pending, (state) => {
                // Handle pending state if needed
                state.loading = true;
            })
            .addCase(deleteUserById.fulfilled, (state, action) => {
                // Update the state by removing the deleted user
                state.users = state.users.filter((user) => user.id !== action.payload);
            })
            .addCase(deleteUserById.rejected, (state, action) => {
                // Handle rejected state if needed
                state.loading = false;
                state.error = action.error.message;
            });

            
    },
});

export default adminSlice.reducer;
