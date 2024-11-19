import React, { useState } from 'react';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { loginEmail, socialLogin } from '../../api/user.api';
import useUserStore from '../../stores/useUserStore';
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser, setAccessToken, setNewSocialUser } = useUserStore();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    loginEmail(email, password, setAccessToken, navigate, setUser);
  };

  const handleSocialLogin = async (event) => {
    if (event.target?.name === 'kakao') {
      const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;
      window.location.href = kakaoAuthURL;
    } else {
      socialLogin(event.credential, navigate, setUser, setNewSocialUser);
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleLogin}>
      <h2 className={styles.title}>Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.id}>
        <label>Email</label>
        <input
          type="email"
          placeholder="email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.password}>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Link to={'#'} className={styles.forGot}>
        Forgot Password?
      </Link>
      <button className={styles.submit} type="submit">
        Login
      </button>

      <div>외부 로그인</div>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <GoogleLogin
          name="google"
          onSuccess={handleSocialLogin}
          onError={() => console.log('로그인 실패')}
        />
      </GoogleOAuthProvider>

      <button onClick={handleSocialLogin}>
        <img
          name="kakao"
          src="../public/image/kakao_login_medium_narrow.png"
          alt="kakaoLogin"
        />
      </button>
      <Link to={'/register'} className={styles.register}>
        Register for free
      </Link>
    </form>
  );
};

export default Login;
