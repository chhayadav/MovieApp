import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// console.log("TMDB_TOKEN", TMDB_TOKEN);

const headers = {
  Authorization: 'bearer ' + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    console.log('Request URL:', BASE_URL + url);

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
