import axios from "../../utils/axios";

export const getUsers = async (currentPage) => {
    const response = await axios.get(`/users?page=${currentPage}`);

    return response.data;
};
export const getAllUsers = async (currentPage) => {
    const response = await axios.get(`/users?per_page=100`);

    return response.data;
};

/* email: "eve.holt@reqres.in",
        password: "cityslicka", */
