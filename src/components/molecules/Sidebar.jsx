import React from "react";
import mainLogo from "../../assets/mainLogo.svg";
import { useLocation } from "react-router-dom";
import dashboardIcon from "../../assets/dashboardIcon.svg";
import userIcon from "../../assets/userIcon.svg";
import salesIcon from "../../assets/salesIcon.svg";

const Sidebar = () => {
    return (
        <div className="w-[25vw] py-6 px-6">
            <div className="flex items-center gap-[0.65rem] font-bold text-[1.75rem]">
                <span>
                    <img src={mainLogo} alt="mainLogo" />
                </span>
                <p className="text-primary">Stack</p>
            </div>
            <div>
                <p className="text-slate-500 mt-4">Pages </p>
            </div>
            <div className="flex flex-col gap-3 mt-5">
                <button
                    className={`flex gap-3 items-center rounded-md py-2 px-4 text-primary ${
                        location.pathname.slice(1) === "dashboard"
                            ? "bg-primary2"
                            : "bg-white"
                    }`}
                >
                    <span>
                        <img src={dashboardIcon} alt="" />
                    </span>
                    <span>Dashboard</span>
                </button>
                <button
                    className={`flex gap-3 items-center rounded-md py-2 px-4 text-primary ${
                        location.pathname.slice(1) === "users"
                            ? "bg-primary2"
                            : "bg-white"
                    }`}
                >
                    <span>
                        <img src={userIcon} alt="" />
                    </span>
                    <span>Users</span>
                </button>
                <button
                    className={`flex gap-3 items-center rounded-md py-2 px-4 text-primary ${
                        location.pathname.slice(1) === "sales"
                            ? "bg-primary2"
                            : "bg-white"
                    }`}
                >
                    <span>
                        <img src={salesIcon} alt="" />
                    </span>
                    <span>Sales</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
