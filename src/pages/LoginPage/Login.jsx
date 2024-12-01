import React, { useState } from 'react';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { loginEmail, googleLogin } from '../../api/user.api';
import { KAKAO_URL } from '../../constants/login.constants';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    loginEmail(email, password, navigate, setError);
  };

  const handleSocialLogin = async (event) => {
    if (event?.target?.name === 'kakao') {
      window.location.href = KAKAO_URL;
    } else {
      googleLogin(event.credential, navigate);
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
      <div className={styles.kakaoLoginBtn} onClick={handleSocialLogin}>
        <img
          name="kakao"
          src="../public/image/kakao_login_medium_wide.png"
          alt="kakaoLogin"
        />
      </div>
      <GoogleLogin
        className={styles.googleLoginBtn}
        onSuccess={handleSocialLogin}
        onError={() => console.log('로그인 실패')}
      />

      <Link to={'/register'} className={styles.register}>
        Register for free
      </Link>
    </form>
  );
};

export default Login;
