import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.scss/';
import { validatePassword } from '../../utils/validatePassword';

const Register = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setVerifyPassword(validatePassword(password, confirmPassword));
  };

  return (
    <form className={styles.registerForm} onSubmit={handleRegister}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.id}>
        <label>Name</label>
        <input
          type="text"
          placeholder="user name"
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.id}>
        <label>NickName</label>
        <input
          type="text"
          placeholder="user nickname"
          required={true}
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
      </div>
      <div className={styles.id}>
        <label>Email</label>
        <input
          type="email"
          placeholder="name@gmail.com"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.password}>
        <label>Password</label>
        {verifyPassword && <p className={styles.error}>{verifyPassword}</p>}
        <input
          type="password"
          placeholder="Password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.password}>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
