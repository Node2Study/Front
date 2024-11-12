import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Project Name</h2>
          <p>&copy; 2024 Project Name. All rights reserved.</p>
        </div>
        <div className={styles.about}>
          <h3>About Us</h3>
          <p>프로젝트입니다</p>
        </div>
        <div className={styles.social}>
          <h3>Follow Us</h3>
          <p>linkedIn</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
