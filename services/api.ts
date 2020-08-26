import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.discord.bio',
  headers: {
    origin: 'https://discord.bio',
  },
});

export default api;
