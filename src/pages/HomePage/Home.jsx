import Card from '../../components/home/HomeCard.jsx';
import style from './Home.module.scss';
import SearchBar from '../../components/searchBox/SearchBar.jsx';

const Home = () => {
  // 임시 데이터
  const cards = [
    {
      title: 'Creative Design',
      description: 'Explore inspiring design works from top creators.',
      image: 'https://via.placeholder.com/150',
      tags: ['React', 'TS'],
    },
    {
      title: 'Innovative Projects',
      description: 'Discover cutting-edge design trends.',
      image: 'https://via.placeholder.com/150',
      tags: ['Spring', 'JAVA'],
    },
    {
      title: 'Innovative Projects',
      description: 'Discover cutting-edge design trends.',
      image: 'https://via.placeholder.com/150',
      tags: ['Next.js', 'scss', 'mongoDB'],
    },
    {
      title: 'Innovative Projects',
      description: 'Discover cutting-edge design trends.',
      image: 'https://via.placeholder.com/150',
      tags: ['HTML/CSS'],
    },
    {
      title: 'Innovative Projects',
      description: 'Discover cutting-edge design trends.',
      image: 'https://via.placeholder.com/150',
      tags: ['Python'],
    },
    {
      title: 'Innovative Projects',
      description: 'Discover cutting-edge design trends.',
      image: 'https://via.placeholder.com/150',
      tags: ['Python'],
    },
    {
      title: 'Innovative Projects',
      description: 'Discover cutting-edge design trends.',
      image: 'https://via.placeholder.com/150',
      tags: ['Python'],
    },
    {
      title: 'Innovative Projects',
      description: 'Discover cutting-edge design trends.',
      image: 'https://via.placeholder.com/150',
      tags: ['Python'],
    },
    {
      title: 'Innovative Projects',
      description: 'Discover cutting-edge design trends.',
      image: 'https://via.placeholder.com/150',
      tags: ['Python'],
    },
    {
      title: 'Innovative Projects',
      description: 'Discover cutting-edge design trends.',
      image: 'https://via.placeholder.com/150',
      tags: ['Python'],
    },
    {
      title: 'Innovative Projects',
      description: 'Discover cutting-edge design trends.',
      image: 'https://via.placeholder.com/150',
      tags: ['Python'],
    },
    {
      title: 'Innovative Projects',
      description: 'Discover cutting-edge design trends.',
      image: 'https://via.placeholder.com/150',
      tags: ['Python'],
    },
  ];

  return (
    <div className={style.page}>
      <div className={style.page__pageIntro}>
        <h1 className={style.page__pageIntro__title}>
          Project Name에서 <br />
          <span>팀 프로젝트 등록 & 팀원 리뷰</span>
          <br /> 해보자
        </h1>
        <p className={style.page__pageIntro__description}>
          고용인과 크리에이터가 영감을 발견하는 것부터 서로 연결하는 것까지,
          크리에이티브 세상을 탐색할 수 있도록 돕는 포괄적인 플랫폼입니다.
        </p>
      </div>

      <div className={style.page__searchBarArea}>
        <SearchBar />
      </div>

      <div className={style.page__cardContainer}>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            tags={card.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
