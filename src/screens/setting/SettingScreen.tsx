import React from 'react'
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

const SettingScreen = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  return (
    <div>SettingScreen
      <button
              onClick={() => {
                logout();
                navigate('/login');
              }}
              style={styles.button}
            >
              Logout
            </button>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    marginTop: 20,
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default SettingScreen