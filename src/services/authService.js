import axios from 'axios';

const API_URL = 'http://localhost:5000/user';

export const register = (email, password, role) => {
  return axios.post(`${API_URL}/register`, { email, password, role });
};

export const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};
