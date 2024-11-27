import style from './HomeCard.module.scss';

const Card = ({ image, title, description, tags }) => {
  return (
    <div className={style.card}>
      <img src={image} alt={`${title} 이미지`} />
      <div className={style.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={style.cardTags}>
          {tags.map((tag, index) => (
            <span key={index} className={style.cardTag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={style.cardFooter}>
          {/*<button className={style.cardButton}>View More</button>*/}
          <span className={style.cardStats}>
            ♥ 120 | 👁 300
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
