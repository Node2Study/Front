import { jwtDecode } from 'jwt-decode';

export const isTokenExpired = (token) => {
  if (!token) return;
  const decoded = jwtDecode(token);
  const currentTime = Math.floor(Date.now() / 1000);

  return decoded.exp > currentTime;
};
