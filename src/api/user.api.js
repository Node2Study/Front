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
  setError,
) => {
  try {
    const response = await api.post('/auth/login', { email, password });

    setUser(response.data.findUser);
    setAccessToken(response.data.accessToken);
    alert('로그인 성공 했습니다.');

    return navigate('/');
  } catch (error) {
    return setError(error.response?.data?.error);
  }
};

export const googleLogin = async (
  idToken,
  navigate,
  setUser,
  setAccessToken,
  setNewSocialUser,
) => {
  try {
    const response = await api.post('/auth/social', { idToken });

    if (!response.data.findUser.nickName) {
      setNewSocialUser(response.data.findUser);
      setAccessToken(response.data.accessToken);
      navigate('/register');
    } else {
      setUser(response.data.findUser);
      alert('로그인 성공 했습니다.');
      navigate('/');
    }
  } catch (error) {
    alert('로그인 실패:', error.response?.data?.error);
  }
};

export const userLogout = async () => {
  try {
    await api.get('/auth/logout');

    localStorage.removeItem('user-storage');
    window.location.reload();
    alert('로그아웃 성공 했습니다.');
  } catch (error) {
    alert(error.response?.data?.error);
  }
};

export const validateToken = async (setUser, setAccessToken) => {
  try {
    const response = await api.get('/user');

    setAccessToken(response.data.accessToken);
    setUser(response.data.findUser);
  } catch (error) {
    console.log(error.response?.data?.error);
  }
};

export const deleteUserAccount = async (id) => {
  try {
    await api.delete(`/user/:${id}`);
    alert('회원탈퇴 성공');
    localStorage.removeItem('user-storage');
    window.location.reload();
  } catch (error) {
    console.log(error.response?.data?.error);
  }
};
