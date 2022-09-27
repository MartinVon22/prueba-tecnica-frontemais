import axios from 'axios';

/**
 * Busca un listado de películas usando como palabras claves una fecha de estreno o título
 * @param query 
 * @returns 
 */
export const getMovies = (query: string) => {
    return axios.get(`${process.env.ENDPOINT_SERVICE}&query=${query}`);
}