import { Route, Routes } from 'react-router-dom';
import Login from '@/pages/LoginPage/Login';
import Register from '../pages/RegisterPage/Register';
import Project from '@/pages/ProjectPage/Project';
import MyPortfolio from '@/pages/MyPortfolio/MyPortfolio';
import Home from '../pages/HomePage/Home.jsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/upload" element={<Project />} />
      <Route path="/portfolio/:userId" element={<MyPortfolio />} />
      <Route path='/my-detail/:projectId' element={<MyPortfolio />} />
    </Routes>
  );
};

export default AppRouter;
