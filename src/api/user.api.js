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
