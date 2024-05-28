import axios from 'axios';

const API_URL = 'http://localhost:5000/';

export const fetchDocuments = (sort) => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_URL}?sort=${sort}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

export const uploadDocument = (document) => {
  const token = localStorage.getItem('token');
  const formData = new FormData();
  formData.append('document', document);

  return axios.post(API_URL, formData, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};
