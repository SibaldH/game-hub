import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8e47c3a25cf141da973b54d13867f024'
    }
})