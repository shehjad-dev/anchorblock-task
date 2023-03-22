import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, getAllUsers } from "./usersAPI";

const initialState = {
    users: {},
    isLoading: false,
    isError: false,
    error: "",
    allUsers: {},
};

/* export const fetch = createAsyncThunk("videos/fetchVideos", async () => {
    const videos = await getVideos();

    return videos;
}); */

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (currentPage) => {
        const users = await getUsers(currentPage);

        return users;
    }
);

export const fetchAllUsers = createAsyncThunk(
    "users/fetchAllUsers",
    async (currentPage) => {
        const users = await getAllUsers();

        return users;
    }
);

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.users = {};
                state.isError = true;
                state.error = action.error?.message;
                state.allUsers = {};
            })
            .addCase(fetchAllUsers.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allUsers = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.users = {};
                state.isError = true;
                state.error = action.error?.message;
                state.allUsers = {};
            });
    },
});

export default usersSlice.reducer;
