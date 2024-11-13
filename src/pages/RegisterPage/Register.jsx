import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.scss/';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }
  };
  return (
    <form className={styles.registerForm} onSubmit={handleRegister}>
      <h2 className={styles.title}>Register</h2>
      {error && <p>{error}</p>}
      <div className={styles.id}>
        <label>Name</label>
        <input
          type="text"
          placeholder="user name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.id}>
        <label>NickName</label>
        <input
          type="text"
          placeholder="user nickname"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
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
      <div className={styles.password}>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className={styles.submit} type="submit">
        Register
      </button>
      <Link className={styles.submit} to={'/login'}>
        cancel
      </Link>
    </form>
  );
};

export default Register;
