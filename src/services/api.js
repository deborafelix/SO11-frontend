import axios from 'axios';

const api = axios.create({
    baseURL: 'https://be-the-hero-so11.herokuapp.com/'
})

export default api;
