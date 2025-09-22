// src/utils/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app", 
  timeout: 5000,
});

export default instance;
