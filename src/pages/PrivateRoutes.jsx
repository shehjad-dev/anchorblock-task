import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../components/molecules/Sidebar";
import DefaultNav from "../components/molecules/DefaultNav";

const PrivateRoutes = () => {
    const token = localStorage.getItem("token");

    return token ? (
        <div className="flex">
            <Sidebar />
            <div>
                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to="/signin" />
    );
};

export default PrivateRoutes;
