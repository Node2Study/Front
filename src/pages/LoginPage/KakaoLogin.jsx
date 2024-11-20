import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../stores/useUserStore';
import { getAccessToken } from '../../api/kakao.api';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const [getToken, setGetToken] = useState(false);
  const { setUser, setNewSocialUser } = useUserStore();

  // 액세스 토큰 가져오기
  getAccessToken(setUser, setNewSocialUser, getToken, setGetToken, navigate);

  return <div>{'로그인 중...'}</div>;
};

export default KakaoLogin;
