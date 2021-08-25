import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: "https://bw-african-marketplace-backend.herokuapp.com/api"
    })
}