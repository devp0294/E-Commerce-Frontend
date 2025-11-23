import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5000/api" // your local backend during dev
    : "https://e-commerce-backend-bipl.onrender.com/api", // production backend
  withCredentials: true, // send cookies for auth
});

export default axiosInstance;
