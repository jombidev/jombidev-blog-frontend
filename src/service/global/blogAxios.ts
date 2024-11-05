import axios from 'axios';

const blogAxios = axios.create({
    responseType: 'json',
    baseURL: 'https://api.jombi.dev',
});

export default blogAxios;