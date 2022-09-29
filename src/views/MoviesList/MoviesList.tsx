import React, { useEffect, useState } from 'react';
import { Grid, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Divider, IconButton, Button } from "@mui/material";
import { getMovies } from '../../core/services/MovieService';
import Paper from '@mui/material/Paper';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const MoviesList = () => {

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); 
    const [ favouriteMovies, setFavouriteMovies ] = useState<any[]>([]);

    useEffect(() => {
        setFavouriteMovies(JSON.parse(localStorage.getItem('favsMovies') || '{}'));
    }, [])

    useEffect(() => {
        searchMovies();
    }, [searchQuery])

    const searchMovies = () => {
        getMovies(searchQuery).then(res => {
            setMovies(res.data.results)
        });
    }

    useEffect(() => {
        localStorage.setItem('favsMovies', JSON.stringify(favouriteMovies));
    }, [favouriteMovies])

    const addFavouriteMovie = (movie) => {
        const isMovieAdded = favouriteMovies.find((f) => f.id === movie.id);
        if (!isMovieAdded) {
            const updateFavsMovies = [...favouriteMovies, {id: movie.id}]
            setFavouriteMovies(updateFavsMovies);
        } else {
            favouriteMovies.splice(favouriteMovies.findIndex((f) => f.id === movie.id), 1)
            const updateFavsMovies = [...favouriteMovies]
            setFavouriteMovies(updateFavsMovies);
        }
    }
    
    const isFavouriteMovie = (movie_id) => {
        return favouriteMovies.length > 0 && favouriteMovies.find((f) => f.id === movie_id);
    }
    return (
        <>
            <Grid container direction="column" alignItems="center" style={{ marginTop: '40px' }}>
                <Grid item md={12}>
                    <Typography variant="h3" gutterBottom >
                        Bienvenido a MovieLand
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        En este sitio podrás encontrar mucha variedad de Películas entretenidas para ver, busca la que desees y a disfrutar!
                    </Typography>
                    <Divider />
                    <Grid
                        container
                        columns={12}
                    >
                        <Grid item md={6} >
                            <TextField id="standard-basic" label="Título, Fecha de Estreno" variant="standard" style={{ width: '100%', marginTop: '20px' }} onChange={(e) => setSearchQuery(e.target.value)}/>
                        </Grid>
                        <Grid item md={6} style={{ display: 'flex', justifyContent: "flex-end"}}>
                            <Button variant="text" startIcon={<StarIcon />}>IR A FAVORITOS</Button>
                        </Grid>
                    </Grid>
                    
                    {movies.length > 0 && (
                        <>
                            <Divider style={{ paddingBottom: '10px' }}/>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell align="center">Título</TableCell>
                                        <TableCell align="center">Fecha de Estreno</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {movies.map((movie: any) => (
                                        <TableRow
                                            key={movie.original_title}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row"><img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} width="100" alt=""/>
                                            </TableCell>
                                            <TableCell align="center">{movie.original_title}</TableCell>
                                            <TableCell align="center">{movie.release_date}</TableCell>
                                            <TableCell align="center">{movie.release_date}</TableCell>
                                            <TableCell align="center">
                                                <Button onClick={() => addFavouriteMovie(movie)}>
                                                    {favouriteMovies.length && isFavouriteMovie(movie.id) ? <StarIcon style={{ cursor: 'pointer' }} /> : <StarBorderIcon style={{ cursor: 'pointer' }} />}
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    )}
                </Grid>
            </Grid>
        </>
    );
}

export default MoviesList;