import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfileScreen: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    username: '',
    bio: '',
    avatar: '',
    facebook: '',
    github: '',
    template: 'template1',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:4000/api/profile', form, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      navigate('/profile/' + form.username);
    } catch {
      alert('Profile creation failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Your Profile</h2>

      {['name', 'username', 'bio', 'avatar', 'facebook', 'github'].map(field => (
        <input
          key={field}
          name={field}
          value={(form as any)[field]}
          onChange={handleChange}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          style={styles.input}
        />
      ))}

      <select name="template" value={form.template} onChange={handleChange} style={styles.select}>
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
        <option value="template3">Template 3</option>
        <option value="template4">Template 4</option>
      </select>

      <button onClick={handleSubmit} style={styles.button}>Submit Profile</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 400,
    margin: '40px auto',
    padding: 20,
    border: '1px solid #ddd',
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 12,
    backgroundColor: '#fafafa',
  },
  heading: {
    textAlign: 'center' as const,
    marginBottom: 20,
  },
  input: {
    padding: '10px 12px',
    border: '1px solid #ccc',
    borderRadius: 4,
    fontSize: 14,
  },
  select: {
    padding: '10px 12px',
    border: '1px solid #ccc',
    borderRadius: 4,
    fontSize: 14,
  },
  button: {
    padding: '10px 14px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    fontWeight: 500,
  },
};

export default ProfileScreen;
