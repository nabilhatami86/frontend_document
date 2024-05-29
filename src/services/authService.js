import axios from 'axios';


export const register = (email, password, role) => {
  return axios.post('http://localhost:5000/register', { email, password, role });
};

export const login = (email, password) => {
  return axios.post('http://localhost:5000/login', { email, password });
};
