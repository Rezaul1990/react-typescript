// src/views/LoginScreen.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/authService';
import { useAuthStore } from '../../store/authStore';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard');
  }, [isAuthenticated, navigate]);

  const handleLogin = async () => {
    if (email && password) {
      try {
        const res = await loginUser({ email, password });
        console.log('Login successful:', res);
        // localStorage.setItem('token', res.token);
        login(res.token, res.user, res.role);
        navigate('/dashboard');
      } catch (err: any) {
        alert(err?.response?.data?.error || 'Login failed');
      }
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>

      <p style={{ marginTop: 16 }}>
        Not a member?{' '}
        <span
          onClick={() => navigate('/authentication/register')}
          style={styles.link}
        >
          Register here
        </span>
      </p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    marginBottom: 12,
    padding: 10,
    width: 250,
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
  },
  link: {
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default LoginScreen;
