import TextSlider from '@/components/common/TextSlider';
import { NOTI_MESSAGES } from '@/constants/message';
import styles from './Project.module.scss';
import { TfiWrite } from 'react-icons/tfi';
import { useState } from 'react';

const Project = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    stack: '',
    team: '',
    github: '',
    url: '',
    start_date: '',
    end_date: '',
  });

  const handleSubmit = (event) => {
    // 새로고침 막기
    event.preventDefault();
    console.log('등록성공');
    console.log('formData', formData);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <section className={styles.upload}>
      <h2 className={styles.title}>
        <TfiWrite />
        프로젝트 등록
      </h2>
      <div className={styles.notification}>
        <TextSlider message={NOTI_MESSAGES} />
      </div>
      <form className={styles.content} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="title">
            제목
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            className={styles.input}
            placeholder="프로젝트 제목을 입력해 주세요"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="description">
            설명
          </label>
          <input
            type="text"
            id="description"
            value={formData.description}
            className={styles.input}
            placeholder="프로젝트 설명을 입력해 주세요"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="stack">
            기술스택
          </label>
          <input
            type="text"
            id="stack"
            value={formData.stack}
            className={styles.input}
            placeholder="HTML/CSS, JS, React.js, Node.js, Express.js, MongoDB"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="team">
            프로젝트 팀원
          </label>
          <input
            type="text"
            id="team"
            value={formData.team}
            className={styles.input}
            placeholder="짱구, 철수, 유리, 훈이, 맹구"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="github">
            깃허브
          </label>
          <input
            type="text"
            id="github"
            value={formData.github}
            className={styles.input}
            placeholder="깃허브 주소를 입력해 주세요"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="url">
            배포주소
          </label>
          <input
            type="text"
            id="url"
            value={formData.url}
            className={styles.input}
            placeholder="배포주소를 입력해 주세요"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="start_date">
            시작날짜
          </label>
          <input type="date"
                 id="start_date"
                 value={formData.start_date}
                 className={styles.input}
                 onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="end_date">
            종료날짜
          </label>
          <input type="date"
                 id="end_date"
                 value={formData.end_date}
                 className={styles.input}
                 onChange={handleInputChange}
          />
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.registerButton}>
            등록하기
          </button>
          <button type="button"
                  className={styles.initButton}
                  onClick={() =>
                    setFormData({
                      title: '',
                      description: '',
                      stack: '',
                      team: '',
                      github: '',
                      url: '',
                      start_date: '',
                      end_date: '',
                    })}>
            초기화
          </button>
        </div>
      </form>
    </section>
  );
};

export default Project;
