import React from "react";
import SocialAuthButton from "./atoms/SocialAuthButton";
import googleIcon from "../assets/googleIcon.svg";
import appleIcon from "../assets/appleIcon.svg";
import SignupForm from "./molecules/SignupForm";

const Signup = () => {
    return (
        <div className="w-[33.75rem] border-0 border-black mx-auto">
            <h2 className="text-primary4 font-bold text-[1.625rem] text-center">
                Getting Started
            </h2>
            <p className="text-primary5 text-[1.125rem] text-center mt-[1.1875rem]">
                Create an account to continue!
            </p>
            <div className="mt-[1.875rem] flex gap-[1.875rem]">
                <SocialAuthButton
                    title="Sign Up with Google"
                    icon={googleIcon}
                />
                <SocialAuthButton title="Sign Up with Apple" icon={appleIcon} />
            </div>
            <div className="gap-[1.4375rem] flex mt-[1.875rem] items-center">
                <div className="bg-primary2 w-[20px] h-[0.125rem] rounded flex-1"></div>
                <p className="text-primary3 text-[1.25rem]">OR</p>
                <div className="bg-primary2 w-[20px] h-[0.125rem] rounded flex-1"></div>
            </div>
            <div>
                <SignupForm />
            </div>
        </div>
    );
};

export default Signup;
