import { Route, Routes } from 'react-router-dom';
import Page from '@/pages/Page';
import Login from '@/pages/LoginPage/Login';

const AppRouter = () => {
  return (
    <Routes>
      {/* 임시입니다 */}
      <Route path="/" element={<Page />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
