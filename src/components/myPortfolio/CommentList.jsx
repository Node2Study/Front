import Comment from '@/components/myPortfolio/Comment';
import styles from './CommentList.module.scss';
import { useEffect, useState } from 'react';

const CommentList = () => {
    const [selected, setSelected] = useState('comment');    
    const [comments, setComments] = useState([]);
    const [evaluations, setEvaluations] = useState([]);
    
    const tabs = [
        { id: 'comment', name: '댓글', data: comments },
        { id: 'evaluation', name: '동료평가', data: evaluations }
    ];

    useEffect(() => {
        // 댓글, 동료평가 데이터를 가져오는 API 호출
        // setComments(댓글데이터);
        // setEvaluations(동료평가데이터);
        setComments([1,2,3,4,5]);
        setEvaluations([1,2,3,4,5,6,7,8,9,10,6,7,8,9,10]);
    },[])

    const handleTab = (tab) => {
        setSelected(tab);
    };

    return (
        <div className={styles.commentBox}>
            <ul className={styles.commentTab}>
                {tabs.map(tab => (
                    <li key={tab.id}
                        className={selected === tab.id ? `${styles[tab.id]} ${styles.selected}` : styles[tab.id]}
                        onClick={() => handleTab(tab.id)}>
                        {tab.name}
                    </li>
                ))}
            </ul>
            {tabs.map(tab => {
                if (tab.id === selected) {
                    return (
                        <div key={tab.id} className={`${styles.commentList} ${styles.selectedContent}`}>
                                <div className={styles.commnetContainer}>
                                {tab.data.map((comment, index) => (
                                    <Comment key={index} content={comment} />
                                ))}
                                </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default CommentList;
