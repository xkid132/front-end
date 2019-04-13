import axios from "axios";

const api = axios.create({
    baseURL: "https://xkid132.herokuapp.com"
});

export default api;