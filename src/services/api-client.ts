import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3127621ca39947e88bf5c14d0cdcfbe5'
    }
})