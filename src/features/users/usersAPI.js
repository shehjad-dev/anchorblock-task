import axios from "../../utils/axios";

export const getUsers = async (currentPage) => {
    const response = await axios.get(`/users?page=${currentPage}`);

    return response.data;
};

/* email: "eve.holt@reqres.in",
        password: "cityslicka", */
