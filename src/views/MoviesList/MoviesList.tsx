import React, { useEffect, useState } from 'react';
import { Grid, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Divider } from "@mui/material";
import { getMovies } from '../../core/services/MovieService';

const MoviesList = () => {

    const [movies, setMovies] = useState();
    const [searchQuery, setSearchQuery] = useState(""); 

    useEffect(() => {
        searchMovies();
    }, [searchQuery])

    const searchMovies = () => {
        getMovies(searchQuery).then(res => {
            console.log(res);
        });
    }
    return (
        <Grid container direction="column" alignItems="center" style={{ marginTop: '40px' }}>
            <Grid item md={12}>
                <Typography variant="h3" gutterBottom >
                    Bienvenido a MovieLand
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    En este sitio podrás encontrar mucha variedad de Películas entretenidas para ver, busca la que desees y a disfrutar!
                </Typography>
                <Divider />
                <TextField id="standard-basic" label="Título, Fecha de Estreno" variant="standard" style={{ width: '50%' }} onChange={(e) => setSearchQuery(e.target.value)}/>
            </Grid>
        </Grid>
    );
}

export default MoviesList;