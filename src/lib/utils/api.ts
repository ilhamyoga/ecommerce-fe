import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Authorization': 'Bearer token',
  },
});

export const loginApi = (payload: any) => {
  return api.post('/auth/login', payload);
};