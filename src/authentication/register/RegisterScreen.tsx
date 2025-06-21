import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterPayload } from '../../models/Auth';
import { registerUser } from '../../services/authService';
import { useAuthStore } from '../../store/authStore';

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminCode, setAdminCode] = useState('');
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard');
  }, [isAuthenticated, navigate]);

  const handleRegister = async () => {
    if (name && email && password) {
      const userData: RegisterPayload = {
        name,
        email,
        password,
        secret: adminCode.trim(),
      };

      try {
        const response = await registerUser(userData);
        alert(response.message || 'Registered successfully');
        navigate('/authentication/login');
      } catch (err: any) {
        alert(err?.response?.data?.error || 'Registration failed');
      }
    } else {
      alert('Please fill name, email and password');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} style={styles.input} />
      <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} style={styles.input} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={styles.input} />
      <input placeholder="Admin Code (optional)" value={adminCode} onChange={e => setAdminCode(e.target.value)} style={styles.input} />
      <button onClick={handleRegister} style={styles.button}>Register</button>
    </div>
  );
};

const styles = {
  container: {
    padding: 40,
    display: 'flex',
    flexDirection: 'column' as const,
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

export default RegisterScreen;
