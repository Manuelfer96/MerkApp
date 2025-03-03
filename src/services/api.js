import axios from 'axios';

// const API_BASE_URL = 'http://159.203.86.38:8080/api/v1';
const API_BASE_URL = 'http://localhost:8080/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Tiempo máximo de espera para las solicitudes
  withCredentials: true,
});

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export const login = async data => {
  try {
    const response = await api.post('/user/login', data, {headers});
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async data => {
  try {
    const response = await api.post('/endpoint', data); // Cambia '/endpoint' por la ruta correcta
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// Añade más métodos según sea necesario (PUT, DELETE, etc.)
