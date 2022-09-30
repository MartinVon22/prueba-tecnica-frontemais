import { Grid, Typography } from "@mui/material";

const FavouriteList = () => {
    return (
        <Grid container direction="column" alignItems="center" style={{ marginTop: '40px' }}>
            <Grid item md={12}>
                <Typography variant="h3" gutterBottom >
                    Listado de Películas Favoritas
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    En esta sección se encuentran todas las películas que has guardado como favoritas.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default FavouriteList;