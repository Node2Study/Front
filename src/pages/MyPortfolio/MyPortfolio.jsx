import PortfolioItem from '@/components/myPortfolio/PortfolioItem';
import styles from './MyPortfolio.module.scss';
import { useLocation, useParams } from 'react-router-dom';
import PortfolioDetail from '@/components/myPortfolio/PortfolioDetail';

const MyPortfolio = () => {

  const portfolioList = [1,2,3,4,5] // 예시데이터

  const location = useLocation();
  const params = useParams(); 
  const renderItem = () => {
    if(location.pathname.includes('/portfolio/')) {
      return portfolioList.map((_, index) =>  <PortfolioItem key={index}/>);
    } else if(location.pathname.includes('/my-detail/')) {
      return <PortfolioDetail />;
    }
  }

  
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
      <div className={styles.listSection}>
        {renderItem()}
      </div>
    </section>
  );
};

export default MyPortfolio;
