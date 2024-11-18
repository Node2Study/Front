import CommentList from '@/components/myPortfolio/CommentList';
import styles from './PortfolioDetail.module.scss';

const PortfolioDetail = ({ portfolio }) => {    
    return (
        <div className={styles.detail}>
            <div className={styles.detailInfo}>
                <h2 className={styles.title}>TODO LIST</h2>
                <div className={styles.contentWrap}>
                    <div className={styles.image}>이미지</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            <span className={styles.infoTitle}>설명</span>
                            <span className={styles.infoContent}>내프로젝트는 투두리스트를 설명하는 프로젝트입니다.</span>
                        </div>
                        <div className={styles.info}>
                            <span className={styles.infoTitle}>기간</span>
                            <span className={styles.infoContent}>2021.08.01 ~ 2021.08.31</span>
                        </div>
                        <div className={styles.info}>
                            {/* 팀원 혹은 팀  */}
                            <span className={styles.infoTitle}>팀원</span>
                            <ul className={styles.infoTeam}>
                                <li>이름1</li>
                                <li>이름2</li>
                                <li>이름3</li>
                                <li>이름4</li>
                            </ul>
                        </div>
                        <div className={styles.info}>
                            <span className={styles.infoTitle}>배포</span>
                            <span className={styles.infoLink}>
                                <a href="https://www.naver.com" target='blank'>
                                    <img src="/image/link.svg" alt="link" />
                                </a>
                            </span>
                        </div>
                        <div className={styles.info}>
                            <span className={styles.infoTitle}>깃허브</span>
                            <span className={styles.infoLink}>
                                <a href="https://www.github.com" target='blank'>
                                    <img src="/image/github.png" alt="github" />
                                </a>
                            </span>
                        </div>
                        <div className={styles.info}>
                            <span className={styles.infoTitle}>좋아요</span>
                            <span className={styles.infoContent}>3000</span>
                        </div>
                        <div className={styles.info}>
                            <span className={styles.infoTitle}>기술스택</span>
                            <ul className={styles.infoStack}>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.comment}>
                <CommentList />
            </div>
        </div>
    );
}

export default PortfolioDetail;