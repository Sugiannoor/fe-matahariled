import Axios from 'axios';

import storage from '@/utils/storage';

const baseURL = import.meta.env.VITE_API_URL + "/api" ?? 'http://127.0.0.1:8000/api';

export const axios = Axios.create({
  baseURL,
});

axios.interceptors.request.use((config) => {
  const token = storage.getToken();

  if (config.headers) {
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    config.headers.Accept = 'application/json';
  }

  return config;
});
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const prevRequest = error?.config;
//     if (error?.response?.status === 401 && !prevRequest?.sent) {
//       storage.clearToken();
//       window.location.replace('/login');
//       // prevRequest.sent = true
//       // const newAccessToken = await refresh()
//       // prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
//       // return axios(prevRequest)
//     }

//     return Promise.reject(error);
//   }
// );
