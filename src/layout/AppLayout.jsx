import Navbar from '@/components/common/Navbar';
import Footer from '../components/common/Footer';
import styles from './AppLayout.module.scss';
import useUserStore from '../stores/useUserStore';

const AppLayout = ({ children }) => {
  const { user } = useUserStore();

  return (
    <>
      <Navbar user={user} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
