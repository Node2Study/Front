import React, { useState } from 'react';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }
  };

  const kakaoLogin = () => {
    const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
    const REDIRECT_URI = 'http://localhost:5173/login';
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

    window.location.href = kakaoAuthURL;
  };

  return (
    <form className={styles.loginForm} onSubmit={handleLogin}>
      <h2 className={styles.title}>Login</h2>
      {error && <p>{error}</p>}
      <div className={styles.id}>
        <label>Email</label>
        <input
          type="email"
          placeholder="username@gmail.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <GoogleLogin onSuccess={''} onError={''} />
      </GoogleOAuthProvider>

      <button onClick={kakaoLogin}>
        <img
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
