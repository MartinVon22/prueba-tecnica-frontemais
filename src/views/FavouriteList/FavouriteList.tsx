import { useEffect, useState } from "react";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Divider, IconButton, Button } from "@mui/material";
import Paper from '@mui/material/Paper';
import { useCookies } from 'react-cookie';

const FavouriteList = () => {

    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const [ cookies, setCookie, removeCookie ] = useCookies(['favsMovies']); 

    useEffect(() => {
        if (cookies.favsMovies) {
            setFavouriteMovies(cookies.favsMovies);
        }
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
                                            <TableCell component="th" scope="row"><img src={`https://image.tmdb.org/t/p/w200/${movie.poster}`} width="100" alt=""/>
                                            </TableCell>
                                            <TableCell align="center">{movie.title}</TableCell>
                                            <TableCell align="center">{movie.release_date}</TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    )}
                    {!favouriteMovies.length && (
                        <Typography variant="subtitle2" gutterBottom>
                            Actualmente no hay películas agregadas a favoritos!
                        </Typography>
                    )}
            </Grid>
        </Grid>
    )
}

export default FavouriteList;