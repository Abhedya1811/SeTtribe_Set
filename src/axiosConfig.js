import axios from 'axios';

// Base configuration for Axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // The Spring Boot backend URL
  withCredentials: true, // If your backend uses credentials (like cookies or sessions)
});

export default axiosInstance;
