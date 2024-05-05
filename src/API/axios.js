import axios from 'axios';

export const BASE_URL = 'https://jsonplaceholder.typicode.com/comments?_limit=15';
export const axiosInstance = axios.create({
	baseURL: BASE_URL,
});
