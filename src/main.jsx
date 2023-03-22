import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import AuthPage from "./pages/AuthPage";
import ErrorPage from "./pages/ErrorPage";
import UsersPage from "./pages/UsersPage";
import PrivateRoutes from "./pages/PrivateRoutes";

const token = localStorage.getItem("token");

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/users" element={<PrivateRoutes />}>
                    <Route path="/users" element={<UsersPage />} />
                </Route>
                <Route path="/" element={<App />}>
                    <Route path="/signin" element={<AuthPage />} />
                    <Route path="/signup" element={<AuthPage />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
                {/* <Route path="/users" element={<UsersPage />} /> */}
            </Routes>
        </BrowserRouter>
    </Provider>
);
/* ReactDOM.createRoot(document.getElementById('root')).render(
    <App />,
) */
