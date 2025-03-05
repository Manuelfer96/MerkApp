import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosError} from 'axios';

const API_BASE_URL = 'http://159.203.86.38:8080/api/v1';
// const API_BASE_URL = 'http://192.168.58.104:8080/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Tiempo máximo de espera para las solicitudes
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

// Interceptor para añadir token JWT
api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para manejar errores globales
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Redirigir a login si no está autenticado
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default api;
