import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menu = [
    {
      name: '메뉴1',
      link: '/menu1',
    },
    {
      name: '메뉴2',
      link: '/menu2',
    },
    {
      name: '메뉴3',
      link: '/menu3',
    },
  ];
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1>Project name</h1>
        <div className={styles.menu}>
          <ul className={styles.menu}>
            {menu.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <button className={styles.login}>로그인</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
