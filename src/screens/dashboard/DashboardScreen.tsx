import React from 'react'
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

const DashboardScreen = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={() => {
        logout();
        navigate('/login');
      }}>
        Logout
      </button>
    </div>
  )
}

export default DashboardScreen