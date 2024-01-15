import axios from 'axios';

export { userApi } from './userApi/userApi';
export { moviesApi } from './moviesApi/moviesApi';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API!,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive',
  },
});
