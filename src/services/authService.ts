// src/services/authService.ts
import api from '../constants/api';
import {
  LoginPayload,
  RegisterPayload,
  AuthResponse,
} from '../models/Auth';

export const loginUser = async (data: LoginPayload): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/login', data);
  return response.data;
};

export const registerUser = async (data: RegisterPayload): Promise<{ message: string }> => {
  const response = await api.post('/register', data);
  return response.data;
};