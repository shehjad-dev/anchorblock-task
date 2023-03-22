import React from "react";
import mainLogo from "../assets/mainLogo.svg";
import downIcon from "../assets/downIcon.svg";

const Navbar = () => {
    return (
        <>
            <div className="max-w-[79rem] mx-auto py-[0rem] flex flex-row items-center justify-center h-[10vh]">
                <nav className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-[0.65rem] font-bold text-[1.75rem]">
                        <span>
                            <img src={mainLogo} alt="mainLogo" />
                        </span>
                        <p className="text-primary">Stack</p>
                    </div>
                    <div className="bg-primary2 px-[1.125rem] py-[0.875rem] rounded-[1rem] flex items-center gap-[2.1875rem]">
                        <p className="text-primary3 font-semibold text-xs">
                            English (UK){" "}
                        </p>
                        <span>
                            <img src={downIcon} alt="mainLogo" />
                        </span>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
