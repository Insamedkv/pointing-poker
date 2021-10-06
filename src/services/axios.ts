import axios from 'axios';

const instance = axios.create({ baseURL: 'https://rft-planning-poker.herokuapp.com/api' });
// const instance = axios.create({ baseURL: 'http://localhost:4000/api' });

instance.interceptors.request.use((req) => {
  if (req.url !== '/signup') {
    req.headers = {
      ...req.headers,
      Authorization: `${localStorage.getItem('poker-auth')}`,
    };
  }
  return req;
});

export default instance;
