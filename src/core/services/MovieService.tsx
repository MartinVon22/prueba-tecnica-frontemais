import axios from 'axios';

const URL_SERVICE = "https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3";

/**
 * Busca un listado de películas usando como palabras claves una fecha de estreno o título
 * @param query 
 * @returns 
 */
export const getMovies = (query: string) => {
    return axios.get(`${URL_SERVICE}&query=${query}`);
}