import React, { useState } from 'react';
import styles from './MyProfile.module.scss'; // SCSS 파일 불러오기
import useUserStore from '../../stores/useUserStore';
import { deleteUserAccount } from '../../api/user.api';

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('editProfile');
  const { user } = useUserStore();
  const [userId, setUserId] = useState(user.email);
  const lastText = userId.charAt(userId.length - 1);

  if (lastText === 'G' || lastText === 'K') {
    setUserId(userId.substr(0, userId.length - 1));
  }

  const deleteUser = () => {
    deleteUserAccount(user._id);
  };

  return (
    <div className={styles.mypage}>
      <div className={styles.header}>
        <h1>My Page</h1>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab_button} ${
            activeTab === 'editProfile' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('editProfile')}
        >
          내정보
        </button>
        <button
          className={`${styles.tab_button} ${
            activeTab === 'teamManagement' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('teamManagement')}
        >
          Team Management
        </button>
        <button
          className={`${styles.tab_button} ${
            activeTab === 'deleteAccount' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('deleteAccount')}
        >
          회원탈퇴
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'editProfile' && (
          <div className={styles.editProfile}>
            <img
              className={styles.profileImg}
              src={user.profileImg}
              alt="프로필이미지"
            />
            <h2 className={styles.label}>아이디 : {`${userId}`}</h2>
            <h2 className={styles.label}>이 름 : {`${user.name}`}</h2>
            <h2 className={styles.label}>닉네임 : {`${user.nickName}`}</h2>
            <button className={styles.editButton}>수정</button>
          </div>
        )}
        {activeTab === 'teamManagement' && (
          <div className={styles.teamManagement}>
            <h2>Team Management</h2>
            <p>Manage your team members here.</p>
          </div>
        )}
        {activeTab === 'deleteAccount' && (
          <div className={styles.editProfile}>
            <h2 className={styles.label}>아이디 : {`${userId}`}</h2>
            <h2 className={styles.label}>이 름 : {`${user.name}`}</h2>
            <button className={styles.editButton} onClick={deleteUser}>
              탈퇴하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
