import { useState } from "react";
import "./App.css";
import { Outlet, Navigate, useLocation, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    const location = useLocation();

    const token = localStorage.getItem("token");

    return token ? (
        <Navigate to="/users" />
    ) : (
        <>
            <Navbar />
            {location.pathname.slice(1) === "" && (
                <div className="text-center h-full p-10 my-6">
                    <Link
                        to="/signin"
                        className="bg-primary text-white p-4 rounded-2xl mx-auto"
                    >
                        Sign In
                    </Link>
                </div>
            )}
            <Outlet />
        </>
    );
}

export default App;
