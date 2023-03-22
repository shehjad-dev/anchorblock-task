import React from "react";
import SocialAuthButton from "./atoms/SocialAuthButton";
import googleIcon from "../assets/googleIcon.svg";
import appleIcon from "../assets/appleIcon.svg";
import SigninForm from "./molecules/SigninForm";

const Signin = () => {
    return (
        <div className="w-[33.75rem] border-0 border-black mx-auto">
            <h2 className="text-primary4 font-bold text-[1.625rem] text-center">
                Sign In
            </h2>
            <p className="text-primary5 text-[1.125rem] text-center mt-[1.1875rem]">
                Welcome back, you’ve been missed!
            </p>
            <div className="mt-[1.875rem] flex gap-[1.875rem]">
                <SocialAuthButton
                    title="Sign In with Google"
                    icon={googleIcon}
                />
                <SocialAuthButton title="Sign In with Apple" icon={appleIcon} />
            </div>
            <div className="gap-[1.4375rem] flex mt-[1.875rem] items-center">
                <div className="bg-primary2 w-[20px] h-[0.125rem] rounded flex-1"></div>
                <p className="text-primary3 text-[1.25rem]">OR</p>
                <div className="bg-primary2 w-[20px] h-[0.125rem] rounded flex-1"></div>
            </div>
            <div>
                <SigninForm />
            </div>
        </div>
    );
};

export default Signin;
