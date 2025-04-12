import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/",  // Django backend URL
  withCredentials: true, // optional: if you're using cookies
});

export default instance;
