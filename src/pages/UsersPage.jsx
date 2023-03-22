import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import firstIcon from "../assets/firstIcon.svg";
import nextIcon from "../assets/nextIcon.svg";
import prevIcon from "../assets/prevIcon.svg";
import lastIcon from "../assets/lastIcon.svg";
import { logOut } from "../features/auth/authSlice";
import DefaultNav from "../components/molecules/DefaultNav";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { users, isLoading, isError, error } = useSelector(
        (state) => state.users
    );
    const [currentPage, setCurrentPage] = useState(1);

    const paginationArr = [];

    for (let i = 0; i < users?.total_pages; i++) {
        paginationArr.push(i + 1);
    }

    const handleDirectPageClick = (e) => {
        setCurrentPage(e.target.innerText);
    };

    const handleNextPageClick = () => {
        if (currentPage < users?.total_pages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePrevPageClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handleLastPageClick = () => {
        if (currentPage !== users?.total_pages) {
            setCurrentPage(users?.total_pages);
        }
    };
    const handleFirstPageClick = () => {
        if (currentPage !== 1) {
            setCurrentPage(1);
        }
    };

    const handleDeleteClick = () => {
        dispatch(logOut());
        localStorage.clear();
        navigate("/signin");
    };

    useEffect(() => {
        dispatch(fetchUsers(currentPage));
    }, [dispatch, currentPage]);

    //decide what to render
    let content;
    if (isLoading) {
        content = <div className="col-span-12">Loading....</div>;
    }
    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>;
    }

    if (!isLoading && !isError && users?.length === 0) {
        content = <div className="col-span-12">No videos found</div>;
    }
    if (!isLoading && !isError && users.data?.length > 0) {
        content = users.data.map((user) => (
            <div
                key={user.id}
                className="flex gap-2 items-center justify-between w-[60vw] mx-auto mb-4"
            >
                <p>{user.id}</p>
                <img src={user.avatar} alt="" />
                <p>
                    {user.first_name} {user.last_name}
                </p>
                <p>{user.email}</p>
            </div>
        ));
    }
    return (
        <div className="flex flex-col">
            <DefaultNav users={users} />
            <div>
                <div className="bg-slate-200 flex justify-between items-center max-w-[79rem] mx-auto">
                    <p className="text-xl m-4">Users List</p>{" "}
                    <button
                        onClick={handleDeleteClick}
                        className="bg-red-100 border-2 border-red-500 p-3 rounded-md"
                    >
                        Logout
                    </button>
                </div>

                <div>{content}</div>
                <div className="flex gap-2 mt-4 items-center">
                    <button
                        className="bg-slate-200 p-3"
                        onClick={handleFirstPageClick}
                    >
                        <img src={firstIcon} alt="" />
                    </button>
                    <button
                        className="bg-slate-200 p-3"
                        onClick={handlePrevPageClick}
                    >
                        <img src={prevIcon} alt="" />
                    </button>
                    {paginationArr.map((item, index) => (
                        <button
                            className={` p-3 ${
                                users.page === item
                                    ? "bg-slate-500"
                                    : "bg-slate-200"
                            }`}
                            key={index}
                            onClick={handleDirectPageClick}
                            disabled={users.page === item ? true : false}
                        >
                            {item}
                        </button>
                    ))}
                    <button
                        className="bg-slate-200 p-3"
                        onClick={handleNextPageClick}
                    >
                        <img src={nextIcon} alt="" />
                    </button>
                    <button
                        className="bg-slate-200 p-3"
                        onClick={handleLastPageClick}
                    >
                        <img src={lastIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
