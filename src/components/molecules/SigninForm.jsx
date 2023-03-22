import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../features/auth/authSlice";

const SigninForm = () => {
    const token = useSelector((state) => state.auth.user.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [firstRenderDone, setFirstRenderDone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        if (!firstRenderDone) {
            setFirstRenderDone(true);
            return;
        }
        navigate("/users");
    }, [token]);

    const handleLogin = (e) => {
        e.preventDefault();
        const loginCred = {
            email: email,
            password: password,
            rememberMe: rememberMe,
        };
        dispatch(doLogin(loginCred));

        /* navigate("/users"); */
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value.toString());
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value.toString());
    };
    const handleRememberMeChange = (e) => {
        setRememberMe(!rememberMe);
    };
    return (
        <form className="space-y-4 text-[#534F4F]" onSubmit={handleLogin}>
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
                    type="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>

            <div className="flex items-center  ">
                <input
                    id="default-checkbox"
                    type="checkbox"
                    checked={rememberMe}
                    className="w-[1.75rem] h-[1.75rem] cursor-pointer rounded-[0.5rem] appearance-none bg-primary6 border-none focus:ring-secondary focus:ring-1 focus:ring-opacity-70 mb-[2.1875rem]"
                    onChange={handleRememberMeChange}
                />
                <label
                    htmlFor="default-checkbox"
                    className="text-primary3 ml-[1.0625rem] mb-[2.1875rem]"
                >
                    Remember me
                </label>
            </div>
            <div className="flex flex-col gap-[2.1875rem]">
                <button
                    type="submit"
                    className="capitalize bg-secondary text-white w-full pt-[1.15rem] pb-[1.25rem] rounded-[1rem]"
                >
                    Sign In
                </button>

                <p className="text-primary3 text-center">
                    Don’t have an account yet?{" "}
                    <Link to="/signup">
                        <span className="text-secondary">Sign Up</span>
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default SigninForm;
