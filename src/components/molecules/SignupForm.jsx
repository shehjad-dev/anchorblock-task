import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { doSignup } from "../../features/auth/authSlice";

const SignupForm = () => {
    const token = useSelector((state) => state.auth.user.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [firstRenderDone, setFirstRenderDone] = useState("");

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [approved, setApproved] = useState(false);

    useEffect(() => {
        if (!firstRenderDone) {
            setFirstRenderDone(true);
            return;
        }
        navigate("/users");
    }, [token]);

    const handleSignup = (e) => {
        e.preventDefault();
        const signupCred = {
            email: email,
            name: name,
            password: password,
            approved: approved,
        };

        dispatch(doSignup(signupCred));

        /* navigate("/users"); */
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value.toString());
    };
    const handleNameChange = (e) => {
        setName(e.target.value.toString());
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value.toString());
    };
    const handleApprovedChange = (e) => {
        setApproved(!approved);
    };
    return (
        <form className="space-y-4 text-[#534F4F]" onSubmit={handleSignup}>
            <div className="relative">
                {/* <span className="absolute left-[1rem] top-0 bottom-0 my-auto bg-red-500 w-fit h-fit">
                    <img src={usernameIcon} />
                </span> */}
                <input
                    className="border-2 border-primary w-full h-full p-[1rem] rounded-[1rem]"
                    type="email"
                    required
                    placeholder="Your Email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div className="relative">
                {/* <span className="absolute left-[1rem] top-0 bottom-0 my-auto bg-red-500 w-fit h-fit">
                    <img src={usernameIcon} />
                </span> */}
                <input
                    className="border-2 border-primary w-full h-full p-[1rem] rounded-[1rem]"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div className="relative">
                {/* <span className="absolute left-[1rem] top-0 bottom-0 my-auto bg-red-500 w-fit h-fit">
                    <img src={usernameIcon} />
                </span> */}
                <input
                    className="border-2 border-primary w-full h-full p-[1rem] rounded-[1rem]"
                    type="password"
                    required
                    placeholder="Create Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>

            <div className="flex items-center  ">
                <input
                    id="default-checkbox"
                    type="checkbox"
                    checked={approved}
                    className="w-[1.75rem] h-[1.75rem] cursor-pointer rounded-[0.5rem] appearance-none bg-primary6 border-none focus:ring-secondary focus:ring-1 focus:ring-opacity-70 mb-[2.1875rem]"
                    onChange={handleApprovedChange}
                />
                <label
                    htmlFor="default-checkbox"
                    className="text-primary3 ml-[1.0625rem] mb-[2.1875rem]"
                >
                    I agree to the Terms & Conditions
                </label>
            </div>
            <div className="flex flex-col gap-[2.1875rem]">
                <button
                    type="submit"
                    className="capitalize bg-secondary text-white w-full pt-[1.15rem] pb-[1.25rem] rounded-[1rem]"
                >
                    Sign Up
                </button>

                <p className="text-primary3 text-center">
                    Already have an account?{" "}
                    <Link to="/signin">
                        <span className="text-secondary">Sign in</span>
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default SignupForm;
