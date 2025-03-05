import {LoginBody, LoginResponse, RegisterUser, User} from '../models';
import api from './api';

export const login = async (data: LoginBody): Promise<LoginResponse> => {
  try {
    const response = await api.post('/user/login', data);
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const logout = async (userId: string) => {
  const response = await api.post('/user/logout', {userId});
  return response.data;
};

export const register = async (
  userData: RegisterUser,
): Promise<LoginResponse> => {
  try {
    const response = await api.post('/user/signup', userData);
    return response.data;
  } catch (error) {
    return error;
  }
};
