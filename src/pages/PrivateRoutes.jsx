import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../components/molecules/Sidebar";
import { fetchAllUsers } from "../features/users/usersSlice";

const PrivateRoutes = () => {
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

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
