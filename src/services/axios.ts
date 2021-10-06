import axios from 'axios';

const instance = axios.create({ baseURL: 'https://rft-planning-poker.herokuapp.com/api' });

instance.interceptors.request.use((req) => {
  console.log(`${req.method} ${req.url}`);
  if (req.url !== '/signup') {
    req.headers = {
      ...req.headers,
      Authorization: `${localStorage.getItem('poker-auth')}`,
    };
  }
  return req;
});

export default instance;
