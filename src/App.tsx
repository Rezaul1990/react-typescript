import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import LoginScreen from './authentication/login/LoginScreen';
import RegisterScreen from './authentication/register/RegisterScreen';

import DashboardScreen from './screens/dashboard/DashboardScreen';
import AboutScreen from './screens/about/AboutScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import SettingScreen from './screens/setting/SettingScreen';
import MoneyScreen from './screens/money/MoneyScreen';
import BottomTab from './components/BottomTab';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import AddContent from './screens/addcontent/AddContent';
import ClassList from './screens/classlist/ClassList';
import PublicProfile from './screens/profile/PublicProfile';

const Layout = () => {
  const location = useLocation();

  // All routes inside authentication folder
  const hideBottomTab = location.pathname.startsWith('/authentication');

  return (
    <>
      <Routes>
        <Route path="/authentication/login" element={<PublicRoute><LoginScreen /></PublicRoute>} />
        <Route path="/authentication/register" element={<PublicRoute><RegisterScreen /></PublicRoute>} />

        <Route path="/dashboard" element={<PrivateRoute><DashboardScreen /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><AboutScreen /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><ProfileScreen /></PrivateRoute>} />
        <Route path="/setting" element={<PrivateRoute><SettingScreen /></PrivateRoute>} />
        <Route path="/money" element={<PrivateRoute><MoneyScreen /></PrivateRoute>} />
        <Route path="/addcontent" element={<PrivateRoute><AddContent /></PrivateRoute>} />
        <Route path="/classlist" element={<PrivateRoute><ClassList /></PrivateRoute>} />
        <Route path="/profile/:username" element={<PrivateRoute><PublicProfile /></PrivateRoute>} />

        <Route path="*" element={<Navigate to="/authentication/login" />} />
      </Routes>

      {!hideBottomTab && <BottomTab />}
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
