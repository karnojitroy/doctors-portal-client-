import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import treatment from '../../images/treatment.png';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



const ExceptionalDentalCare = () => {

    return (
        <Container sx={{ my: 5, py: 5 }}>
            <Card sx={{ boxShadow: "none" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <CardMedia
                            component="img"
                            sx={{ mdWidth: 350, mdHeight: 520 }}
                            image={treatment}
                            alt="Live from space album cover"
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'justify' }}>
                            <CardContent sx={{ flex: '1 0 auto', border: 'none' }}>
                                <Typography component="div" variant="h3">
                                    Exceptional Dental Care, <br /> on Your Terms
                                </Typography>
                                <Typography sx={{ my: 3 }} variant="subtitle1" color="text.secondary" component="div">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus veritatis inventore reiciendis dolorum quisquam laboriosam odit a repellendus omnis unde voluptas veniam, esse natus id quidem reprehenderit cupiditate illo alias dignissimos quam optio maxime sequi. Voluptates nobis eligendi eos fugit veniam maxime, quidem ratione dolorem quos minima modi quibusdam voluptas sunt quam recusandae, corporis vero accusantium provident eveniet blanditiis laboriosam voluptatibus adipisci natus explicabo! Accusantium sit laudantium asperiores illum magni distinctio ea voluptatibus praesentium, excepturi doloremque? Doloribus repellat illum a id temporibus magni sit rem architecto repellendus ducimus dolorum illo praesentium
                                </Typography>
                                <Button variant="contained" sx={{ mt: 3 }}>Learn more</Button>
                            </CardContent>
                        </Box>
                    </Grid>
                </Grid>


            </Card>
        </Container >
    );
};

export default ExceptionalDentalCare;