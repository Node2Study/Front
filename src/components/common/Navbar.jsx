import { useState } from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import useUserStore from '../../stores/useUserStore';
import { userLogout } from '../../api/user.api';

const Navbar = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resetUser } = useUserStore();
  const menu = [
    { name: '프로젝트 등록', link: '/upload' },
  ];

  const logout = () => {
    if (user) {
      resetUser();
      userLogout();
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to={'/'}>
          <div className={styles.logo}>
            Project Name
          </div>
        </Link>
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
          <Link to={user || '/login'}>
            <button className={styles.login} onClick={logout}>
              {user ? '로그아웃' : '로그인'}
            </button>
          </Link>
          <Link to={'/register'}>
            <button className={styles.register}>회원가입</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
