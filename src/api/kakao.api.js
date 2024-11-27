import axios from 'axios';
import api from './\bapi';

const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

const CODE = new URL(window.location.href).searchParams.get('code');

export const getAccessToken = async (
  setUser,
  setNewSocialUser,
  setAccessToken,
  setGetToken,
  navigate,
) => {
  try {
    const response = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      null,
      {
        params: {
          grant_type: 'authorization_code',
          client_id: KAKAO_REST_API_KEY,
          redirect_uri: KAKAO_REDIRECT_URI,
          code: CODE,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    const token = response.data.access_token;

    // 프로필 정보 가져오기 호출
    await getProfile(
      token,
      setUser,
      setNewSocialUser,
      setAccessToken,
      navigate,
    );
  } catch (error) {
    console.error('Error during token request:', error);
  } finally {
    setGetToken(true);
  }
};

const getProfile = async (
  token,
  setUser,
  setNewSocialUser,
  setAccessToken,
  navigate,
) => {
  try {
    const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const profile = response.data;

    await kakaoLogin(
      {
        nickname: profile.properties.nickname,
        profileImage: profile.properties.profile_image,
        email: profile.kakao_account.email,
      },
      setUser,
      setNewSocialUser,
      setAccessToken,
      navigate,
    );
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
};

const kakaoLogin = async (
  idToken,
  setUser,
  setNewSocialUser,
  setAccessToken,
  navigate,
) => {
  try {
    const response = await api.post('/auth/social', { idToken });

    if (!response.data.findUser.nickName) {
      setNewSocialUser(response.data.findUser);
      navigate('/register');
    } else {
      setUser(response.data.findUser);
      setAccessToken(response.data.accessToken);
      alert('로그인 성공 했습니다.');
      navigate('/');
    }
  } catch (eror) {
    console.error('로그인 실패:', error.response?.data);
  }
};
