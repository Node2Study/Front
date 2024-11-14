import { useState } from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { name: '메뉴1', link: '/menu1' },
    { name: '메뉴2', link: '/menu2' },
    { name: '메뉴3', link: '/menu3' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1>Project name</h1>
        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <RxHamburgerMenu />
        </button>

        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <ul className={styles.menuList}>
            {menu.map((item, index) => (
              <li key={index}>
                <Link to={item.link} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to={'/login'}>
            <button className={styles.login}>로그인</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
