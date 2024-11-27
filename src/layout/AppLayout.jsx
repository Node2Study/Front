import Navbar from '@/components/common/Navbar';
import Footer from '../components/common/Footer';
import styles from './AppLayout.module.scss';
import useUserStore from '../stores/useUserStore';

const AppLayout = ({ children }) => {
  const { user } = useUserStore();

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
