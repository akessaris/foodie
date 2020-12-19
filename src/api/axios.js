import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.documenu.com/v2'
});

export default instance;
