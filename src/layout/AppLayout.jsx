import Navbar from '@/components/common/Navbar';
import Footer from '../components/common/Footer';

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
