import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.scss';
import { validatePassword } from '@/utils/validatePassword';
import { registerUser } from '../../api/user.api';
import useUserStore from '../../stores/useUserStore';

const Register = () => {
  const navigate = useNavigate();
  const { newSocialUser } = useUserStore();
  const [formData, setFormData] = useState({
    name: '',
    nickName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [verifyPassword, setVerifyPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!!newSocialUser) return registerUser(formData, navigate);

    const passwordError = validatePassword(
      formData.password,
      formData.confirmPassword,
    );

    if (passwordError) return setVerifyPassword(passwordError);

    setVerifyPassword('');
    registerUser(formData, navigate);
  };

  useEffect(() => {
    if (newSocialUser) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...newSocialUser,
      }));
    }
  }, []);

  return (
    <form className={styles.registerForm} onSubmit={handleRegister}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.id}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="user name"
          required={true}
          disabled={!!newSocialUser}
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.id}>
        <label>NickName</label>
        <input
          type="text"
          name="nickName"
          placeholder="user nickname"
          required={true}
          value={formData.nickName}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.id}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="name@gmail.com"
          required={true}
          disabled={!!newSocialUser}
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.password}>
        <label>Password</label>
        {verifyPassword && <p className={styles.error}>{verifyPassword}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          required={true}
          disabled={!!newSocialUser}
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.password}>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          disabled={!!newSocialUser}
          value={formData.confirmPassword}
          onChange={handleInputChange}
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
