import React from "react";

const SocialAuthButton = ({ title, icon }) => {
    return (
        <button className="bg-primary2 py-[1rem] px-[1.75rem] rounded-[1rem] flex gap-[0.8125rem] w-[15.9375rem]">
            <span>
                <img src={icon} alt={title} />
            </span>

            <span className="text-primary5 text-base">{title}</span>
        </button>
    );
};

export default SocialAuthButton;
