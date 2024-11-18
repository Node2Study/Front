import Navbar from '@/components/common/Navbar';
import Footer from '../components/common/Footer';
import styles from './AppLayout.module.scss';
import useUserStore from '../stores/useUserStore';
import { useEffect } from 'react';
import { validateToken } from '../api/user.api';

const AppLayout = ({ children }) => {
  const { user, setUser } = useUserStore();

  useEffect(() => {
    validateToken(setUser);
  }, []);

  return (
    <>
      <Navbar user={user} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
