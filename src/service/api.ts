import axios from "axios";

const api = axios.create({
  baseURL: "https://test-candidaturas-front-end.onrender.com",
});

export default api;
