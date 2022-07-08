import axios from "axios";

const urlBase = "http://localhost:3000/";

const Axios = axios.create({
    baseURL: urlBase,
});

export default Axios;