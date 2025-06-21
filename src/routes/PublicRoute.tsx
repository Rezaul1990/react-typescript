// src/routes/PublicRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import type { ReactElement } from 'react';

const PublicRoute = ({ children }: { children: ReactElement }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;
