import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../stores/useUserStore';
import { getAccessToken } from '../../api/kakao.api';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const [getToken, setGetToken] = useState(false);
  const { setUser, setNewSocialUser } = useUserStore();

  useEffect(() => {
    if (!getToken) {
      getAccessToken(setUser, setNewSocialUser, setGetToken, navigate);
    }
  }, []);

  return <div>{'로그인 중...'}</div>;
};

export default KakaoLogin;
