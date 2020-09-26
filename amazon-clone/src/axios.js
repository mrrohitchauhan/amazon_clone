import axios from "axios";

const baseUrl = "http://localhost:9000";
const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: baseUrl,
});

export default instance;
