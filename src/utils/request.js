import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 3000,
});
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default request;
