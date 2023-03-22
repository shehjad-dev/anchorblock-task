import { useState } from "react";
import "./App.css";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    const token = localStorage.getItem("token");

    return token ? (
        <Navigate to="/users" />
    ) : (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default App;
