import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import './BottomTab.css';

const BottomTab: React.FC = () => {
  const role = useAuthStore((state) => state.role);

  // Define role-based tab configuration
  const tabConfig: Record<string, { path: string; label: string }[]> = {
    admin: [
      { path: '/dashboard', label: 'Dashboard' },
      { path: '/profile', label: 'Profile' },
      { path: '/addcontent', label: 'AddContent' },
      { path: '/about', label: 'About' },
      { path: '/setting', label: 'Setting' },
    ],
    member: [
      { path: '/dashboard', label: 'Dashboard' },
      { path: '/profile', label: 'Profile' },
      { path: '/setting', label: 'Setting' },
      { path: '/money', label: 'Money' },
      { path: '/about', label: 'About' },
    ],
    student: [
      { path: '/dashboard', label: 'Dashboard' },
      { path: '/profile', label: 'Profile' },
      { path: '/about', label: 'About' },
      { path: '/classlist', label: 'ClassList' },
      { path: '/setting', label: 'Setting' },
    ],
  };

  // Fallback to empty if role is not set
  const tabs = tabConfig[role || ''] || [];

  return (
    <div className="bottom-tab-container">
      {tabs.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};

export default BottomTab;
