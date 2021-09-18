import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:4000/api' });

instance.interceptors.request.use((req) => {
  console.log(`${req.method} ${req.url}`);
  if (req.url !== '/signup') {
    req.headers = { ...req.headers, Authorization: `Basic ${localStorage.getItem('poker-auth')}` };
  }
  return req;
});

export default instance;
