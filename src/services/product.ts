import {LoginBody, LoginResponse, Product, RegisterUser, User} from '../models';
import api from './api';

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get('/products');
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getProduct = async (id: string) => {
  const response = await api.get('/products/' + id);
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
