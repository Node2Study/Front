import RatingStar from "../common/RatingStar";
import styles from './Comment.module.scss';

const Comment = ({ type }) => {
    return (
        <div className={styles.comment}>
            { type === 'comment' && 
                <div className={styles.profile}>
                    <img src="/image/no-image.jpg" />
                    <div className={styles.name}>이름</div>
                </div>
            }
            <div className={styles.commentContent}>
                <RatingStar ratingAvg={3.2}/>
                <p className={styles.content}>댓글내용이 들어갑니다..!!</p>
            </div>
        </div>
    );
}

export default Comment;