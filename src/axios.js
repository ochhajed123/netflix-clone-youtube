import axios from "axios";

// SnSVSalSse axSos
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
