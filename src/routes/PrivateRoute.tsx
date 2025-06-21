import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import type { ReactElement } from 'react';

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;