// src/store/authStore.ts
import { create } from 'zustand';
import { User } from '../models/User';
interface AuthState {
  token: string | null;
  user: User | null;
  role: string | null;
  isAuthenticated: boolean;
  login: (token: string, user: User, role: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
  role: localStorage.getItem('role') || null,
  isAuthenticated: !!localStorage.getItem('token'),

  login: (token, user, role) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('role', role);
    set({ token, user, role, isAuthenticated: true });
  },

  logout: () => {
    localStorage.clear();
    set({ token: null, user: null, role: null, isAuthenticated: false });
  },
}));
