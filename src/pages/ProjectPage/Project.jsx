import styles from './Project.module.scss';
import { TfiWrite } from 'react-icons/tfi';

const Project = () => {
  const handleSubmit = () => {
    console.log('등록성공');
  };
  return (
    <section className={styles.upload}>
      <h2 className={styles.title}>
        <TfiWrite />
        프로젝트 등록
      </h2>
      <form className={styles.content} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label} for="project-title">
            제목
          </label>
          <input
            type="text"
            id="project-title"
            className={styles.input}
            placeholder="프로젝트 제목을 입력해 주세요"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} for="project-description">
            설명
          </label>
          <input
            type="text"
            id="project-description"
            className={styles.input}
            placeholder="프로젝트 설명을 입력해 주세요"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} for="project-stack">
            기술스택
          </label>
          <input
            type="text"
            id="project-stack"
            className={styles.input}
            placeholder="기술스택을 입력해 주세요"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} for="project-team">
            팀 선택
          </label>
          <input
            type="text"
            id="project-team"
            className={styles.input}
            placeholder="팀을 선택해 주세요"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} for="project-github">
            깃허브
          </label>
          <input
            type="text"
            id="project-github"
            className={styles.input}
            placeholder="깃허브 주소를 입력해 주세요"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} for="project-url">
            배포주소
          </label>
          <input
            type="text"
            id="project-url"
            className={styles.input}
            placeholder="배포주소를 입력해 주세요"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} for="project-start-date">
            시작날짜
          </label>
          <input type="date" id="project-start-date" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} for="project-end-date">
            종료날짜
          </label>
          <input type="date" id="project-end-date" className={styles.input} />
        </div>
      </form>
      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.registerButton}>
          등록하기
        </button>
        <button type="button" className={styles.initButton}>
          초기화
        </button>
      </div>
    </section>
  );
};

export default Project;
