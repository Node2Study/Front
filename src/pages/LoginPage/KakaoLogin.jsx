import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../../api/kakao.api';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const [getToken, setGetToken] = useState(false);

  useEffect(() => {
    if (!getToken) {
      getAccessToken(setGetToken, navigate);
    }
  }, []);

  return <div>{'로그인 중...'}</div>;
};

export default KakaoLogin;
