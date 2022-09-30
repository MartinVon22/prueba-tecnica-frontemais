import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";

const FavouriteList = () => {

    const [favouriteMovies, setFavouriteMovies] = useState([]);

    useEffect(() => {
        setFavouriteMovies(JSON.parse(localStorage.getItem('favsMovies') || '{}'));
    }, [])

    return (
        <Grid container direction="column" alignItems="center" style={{ marginTop: '40px' }}>
            <Grid item md={12}>
                <Typography variant="h3" gutterBottom >
                    Listado de Películas Favoritas
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    En esta sección se encuentran todas las películas que has guardado como favoritas.
                </Typography>

                {favouriteMovies.length > 0 && (
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
                                        {favouriteMovies.map((movie: any) => (
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
    )
}

export default FavouriteList;