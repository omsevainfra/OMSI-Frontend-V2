import axios from 'axios';

// Public API client for the marketing website
// Does NOT include credentials (cookies) to avoid CORS issues with wildcard origins
export const publicApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});
