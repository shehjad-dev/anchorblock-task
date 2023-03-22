import React, { useState } from "react";
import notificationIcon from "../../assets/notificationIcon.svg";
import { useSelector } from "react-redux";

const DefaultNav = ({ users }) => {
    const { allUsers } = useSelector((state) => state.users);
    const id = localStorage.getItem("id");
    const email = localStorage.getItem("email");
    let content;

    if (allUsers.data) {
        content = (
            <span>
                {allUsers.data && id && (
                    <img
                        src={`${
                            allUsers.data.find((item) => item.id === Number(id))
                                .avatar
                        }`}
                        alt="mainLogo"
                        className="w-10 h-10 rounded-full "
                    />
                )}
                {allUsers.data && email && (
                    <img
                        src={`${
                            allUsers.data.find((item) => item.email === email)
                                .avatar
                        }`}
                        alt="mainLogo"
                        className="w-10 h-10 rounded-full "
                    />
                )}
            </span>
        );
    }

    return (
        <div className="py-6 flex justify-between items-center">
            <div>
                <input
                    className="border-2 border-primary w-[500px] h-full p-[1rem] rounded-[1rem] "
                    type="text"
                    required
                    placeholder="Search"
                />
            </div>
            <div className="flex items-center gap-4">
                <span>
                    <img src={notificationIcon} alt="mainLogo" />
                </span>
                {content}
            </div>
        </div>
    );
};

export default DefaultNav;
