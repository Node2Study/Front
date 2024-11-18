import api from './\bapi';

export const registerUser = async (formData, navigate) => {
  try {
    const response = await api.post('/user', formData);

    if (response.status === 200) {
      alert('회원가입을 축하합니다.');
      navigate('/login');
    }
  } catch (error) {
    alert(error.response?.data?.error);
  }
};

export const loginEmail = async (
  email,
  password,
  setAccessToken,
  navigate,
  setUser,
) => {
  try {
    const response = await api.post('/auth/login', { email, password });

    setUser(response.data.findUser);
    setAccessToken(response.data.accessToken);

    alert('로그인 성공 했습니다.');

    return navigate('/');
  } catch (error) {
    alert(error.response?.data?.error);
  }
};

export const validateToken = async (setUser, setAccessToken) => {
  try {
    const response = await api.get('/user');

    setAccessToken(response.data.accessToken);
    setUser(response.data.findUser);
  } catch (error) {}
};
