import { configureStore } from "@reduxjs/toolkit";
/* import counterReducer from "../features/counter/counterSlice"; */
import authReducer from "../features/auth/authSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
    },
});
