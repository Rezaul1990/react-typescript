import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

const DashboardScreen: React.FC = () => {
  
  const user = useAuthStore((state) => state.user);
  const role = useAuthStore((state) => state.role);
  

  return (
    <div style={styles.container}>
      <h1>Welcome, {user?.name}!</h1>
      <p>Email: {user?.email}</p>
      <p>Role: {role}</p>

      
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 40,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default DashboardScreen;
