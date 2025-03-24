import { api } from "./config";

export type SignUpData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export type User = {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  telephone: string;
  password: string;
  role: string;
}

export type LoginCredentials = {
  email: string;
  password: string;
}

export type LoginData = {
  user: User;
  token: string;
}

export const signUp = async (data: SignUpData) => {
  return api.post('/auth/signup', data).then((res) => res.data);
}

export const login = async (credentials: LoginCredentials): Promise<LoginData> => {
  return api.post('/auth/login', credentials).then((res) => res.data);
}

export const getCurrentUser = async (): Promise<User> => {
  return api.get<User>('/auth/current').then((res) => res.data);
}

export const logout = () => {
  return api.get('/auth/logout');
};


