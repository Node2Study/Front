import { Route, Routes } from 'react-router-dom';
import Page from '@/pages/Page';
import Login from '@/pages/LoginPage/Login';
import Register from '../pages/RegisterPage/Register';
import Project from '@/pages/ProjectPage/Project';
import MyPortfolio from '@/pages/MyPortfolio/MyPortfolio';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/upload" element={<Project />} />
      <Route path="/portfolio/:userId" element={<MyPortfolio />} />
    </Routes>
  );
};

export default AppRouter;
