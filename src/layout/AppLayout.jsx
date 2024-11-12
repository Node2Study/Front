import Navbar from '@/components/common/Navbar';
import Footer from '../components/common/Footer';
import styles from './AppLayout.module.scss';

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
