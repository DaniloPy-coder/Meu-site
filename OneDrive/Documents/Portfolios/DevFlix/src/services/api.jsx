import axios from "axios";

// Base da URL
// URL da API: /movie/now_playing?api_key=e38a925c5d567ef06f3d0ae1baf4b0abe38a925c5d567ef06f3d0ae1baf4b0ab;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
