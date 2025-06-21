// src/services/authService.ts
import api from '../constants/api';
import {
  LoginPayload,
  RegisterPayload,
  AuthResponse,
} from '../models/Auth';

export const loginUser = async (data: LoginPayload): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/login', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const registerUser = async (data: RegisterPayload): Promise<{ message: string }> => {
  const response = await api.post('/register', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
