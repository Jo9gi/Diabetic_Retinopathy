import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';
const ML_API_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Auth endpoints
export const login = (credentials) => api.post('/auth/login', credentials);
export const signup = (userData) => api.post('/auth/signup', userData);

// Patient endpoints
export const getPatients = () => api.get('/patients');

// ML prediction endpoint
export const predict = (data) => axios.post(`${ML_API_URL}/predict`, data);