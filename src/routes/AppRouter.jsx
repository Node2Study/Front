import { Route, Routes } from 'react-router-dom';
import Page from '@/pages/Page';
import Login from '@/pages/LoginPage/Login';
import Register from '../pages/RegisterPage/Register';
import Project from '@/pages/ProjectPage/Project';
import MyPortfolio from '@/pages/MyPortfolio/MyPortfolio';
import KakaoLogin from '../pages/LoginPage/KakaoLogin';
import PrivateRoute from './PrivateRoute';
import MyProfile from '../pages/MyProfile/MyProfile';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/login" element={<Login />} />
      <Route path="/kakaoLogin" element={<KakaoLogin />} />
      <Route path="/register" element={<Register />} />
      <Route element={<PrivateRoute />}>
        <Route path="/upload" element={<Project />} />
        <Route path="/profile/:userId" element={<MyProfile />} />
      </Route>
      <Route path="/portfolio/:userId" element={<MyPortfolio />} />
      <Route path="/my-detail/:projectId" element={<MyPortfolio />} />
    </Routes>
  );
};

export default AppRouter;
