// src/models/Auth.ts

import { User } from './User';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  secret?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
  role: string;
}
