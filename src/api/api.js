import axios from 'axios';
import useUserStore from '../stores/useUserStore';
import { isTokenExpired } from '../utils/isTokenExpried';

const BACK_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: BACK_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const { accessToken } = useUserStore.getState();

    if (isTokenExpired(accessToken)) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      config.withCredentials = true;
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
