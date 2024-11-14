import { Route, Routes } from 'react-router-dom';
import Page from '@/pages/Page';
import Login from '@/pages/LoginPage/Login';
import Register from '../pages/RegisterPage/Register';

const AppRouter = () => {
  return (
    <Routes>
      {/* 임시입니다 */}
      <Route path="/" element={<Page />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRouter;
