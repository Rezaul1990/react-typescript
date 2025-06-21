import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomTab.css';

const BottomTab: React.FC = () => {
  return (
    <div className="bottom-tab-container">
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
      >
        About
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
      >
        Profile
      </NavLink>
      <NavLink
        to="/setting"
        className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
      >
        Setting
      </NavLink>
      <NavLink
        to="/money"
        className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
      >
        Money
      </NavLink>
    </div>
  );
};

export default BottomTab;
