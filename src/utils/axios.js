import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL:
    'https://contacts-d9f0b-default-rtdb.europe-west1.firebasedatabase.app/',
});
