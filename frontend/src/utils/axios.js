import axios from 'axios';

const customisedAxios = axios.create({
  baseURL: 'https://to-do-list-application-0g0o.onrender.com/api',
  timeout: 150000,
});

export default customisedAxios;
