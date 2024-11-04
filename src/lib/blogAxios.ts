import axios from 'axios';
import { configDotenv } from 'dotenv';

configDotenv({ path: '.env' });

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const blogAxios = axios.create({
    responseType: 'json',
    baseURL: BASE_URL,
});

export default blogAxios;