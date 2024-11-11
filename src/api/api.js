import axios from 'axios';

const BACK_URL = import.meta.env.VITE_API_BASE_URL;
const TOKEN = sessionStorage.getItem('token'); //임시설정, session에 할건지, cookies에 할건지 결정 필요

const api = axios.create({
  baseURL: BACK_URL,
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${TOKEN}`,
  },
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token'); //임시설정, session에 할건지, cookies에 할건지 결정 필요
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      //인증일 경우 401 에러
      console.error('로그인이 필요합니다.');
    }
    return Promise.reject(error);
  },
);

export default api;
