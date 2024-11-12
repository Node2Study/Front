import { Route, Routes } from 'react-router-dom';
import Page from '@/pages/Page';

const AppRouter = () => {
  return (
    <Routes>
      {/* 임시입니다 */}
      <Route path="/" element={<Page />} />
    </Routes>
  );
};

export default AppRouter;
