import styles from './MyPortfolio.module.scss';

const MyPortfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.profileSection}>
        <div className={styles.profile}>
          <div className={styles.profileLeft}>
            <img src="/image/no-image.jpg" />
            <div className={styles.name}>나의 닉네임입니다</div>
          </div>
          <div className={styles.profileRight}>
            <button type="button" className={styles.edit}>
              Edit
            </button>
          </div>
        </div>
        <div className={styles.infoBox}>
          <span className={styles.titleText}>MY PROJECT</span>
          <span className={styles.text}>5</span>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
