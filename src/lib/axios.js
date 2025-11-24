import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://e-commerce-backend-f0np.onrender.com/api/", // production backend
  withCredentials: true, // send cookies for auth
});

export default axiosInstance;
