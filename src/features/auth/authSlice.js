import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, signupUser } from "./authAPI";

const initialState = {
    user: {},
    isLoading: false,
    isError: false,
    error: "",
};

/* export const fetch = createAsyncThunk("videos/fetchVideos", async () => {
    const videos = await getVideos();

    return videos;
}); */
export const doLogin = createAsyncThunk(
    "auth/login",
    async ({ email, password, rememberMe }) => {
        const user = await loginUser({ email, password });
        localStorage.setItem("token", user.token);
        localStorage.setItem("email", email);
        return user;
    }
);
export const doSignup = createAsyncThunk(
    "auth/signup",
    async ({ email, password, rememberMe }) => {
        const user = await signupUser({ email, password });
        localStorage.setItem("token", user.token);
        localStorage.setItem("id", user.id);

        return user;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loadFromLocalStore: (state) => {
            state.user = localStorage.getItem("token");
        },
        logOut: (state) => {
            state.user = {};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(doLogin.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(doLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(doLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.user = {};
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(doSignup.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(doSignup.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(doSignup.rejected, (state, action) => {
                state.isLoading = false;
                state.user = {};
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});
export const { logOut } = authSlice.actions;

export default authSlice.reducer;
