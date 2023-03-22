import React from "react";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthPage = () => {
    const location = useLocation();
    const { isLoading } = useSelector((state) => state.users);
    return (
        <>
            <div className="flex items-center justify-center h-[90vh]">
                {isLoading && <div>Loading ...</div>}
                {location.pathname.slice(1) === "signin" ? (
                    <Signin />
                ) : (
                    <Signup />
                )}
            </div>
        </>
    );
};

export default AuthPage;
