import axios from "../../utils/axios";

export const loginUser = async ({ email, password }) => {
    const response = await axios.post("/login", {
        email: email,
        password: password,
    });

    return response.data;
};

export const signupUser = async ({ email, password }) => {
    const response = await axios.post("/register", {
        email: email,
        password: password,
    });

    return response.data;
};
/* email: "eve.holt@reqres.in",
        password: "cityslicka", */
