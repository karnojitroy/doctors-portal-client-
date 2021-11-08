import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import people1 from '../../images/people-1.png';
import people2 from '../../images/people-2.png';
import people3 from '../../images/people-3.png';

const Testimonial = () => {


    return (
        <Container sx={{ my: 5, py: 5 }}>
            <Box sx={{ mt: 5, textAlign: "left" }} >
                <Typography sx={{ color: "info.main" }} variant="h6" gutterBottom component="div">
                    TESTIMONIAL
                </Typography>
                <Typography component="div" variant="h4">
                    What's Our Patients <br /> Says
                </Typography>
            </Box>


            <Box sx={{ mt: 5 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ p: 3 }}>
                            <CardContent>
                                <Typography sx={{ textAlign: "justify" }} variant="body2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora voluptatum voluptatem quia fuga. Saepe cupiditate tempora aperiam nam quis iste illum, beatae aliquam mollitia, pariatur praesentium repudiandae accusantium provident quod nemo? Ad reiciendis repellat dolores expedita in. Quibusdam ea aliquam, sequi officia ut ullam optio aliquid iure earum quae.
                                </Typography>
                            </CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <img src={people1} alt="" width="50" />
                                </Grid>
                                <Grid item xs={9} sx={{ textAlign: "left" }}>
                                    <Typography sx={{ color: "info.main" }} variant="h6" gutterBottom component="div">
                                        Winson Herry
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        California
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ p: 3 }}>
                            <CardContent>
                                <Typography sx={{ textAlign: "justify" }} variant="body2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora voluptatum voluptatem quia fuga. Saepe cupiditate tempora aperiam nam quis iste illum, beatae aliquam mollitia, pariatur praesentium repudiandae accusantium provident quod nemo? Ad reiciendis repellat dolores expedita in. Quibusdam ea aliquam, sequi officia ut ullam optio aliquid iure earum quae.
                                </Typography>
                            </CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <img src={people2} alt="" width="50" />
                                </Grid>
                                <Grid item xs={9} sx={{ textAlign: "left" }}>
                                    <Typography sx={{ color: "info.main" }} variant="h6" gutterBottom component="div">
                                        Winson Herry
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        California
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ p: 3 }}>
                            <CardContent>
                                <Typography sx={{ textAlign: "justify" }} variant="body2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora voluptatum voluptatem quia fuga. Saepe cupiditate tempora aperiam nam quis iste illum, beatae aliquam mollitia, pariatur praesentium repudiandae accusantium provident quod nemo? Ad reiciendis repellat dolores expedita in. Quibusdam ea aliquam, sequi officia ut ullam optio aliquid iure earum quae.
                                </Typography>
                            </CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <img src={people3} alt="" width="50" />
                                </Grid>
                                <Grid item xs={9} sx={{ textAlign: "left" }}>
                                    <Typography sx={{ color: "info.main" }} variant="h6" gutterBottom component="div">
                                        Winson Herry
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        California
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </Container >
    );
};

export default Testimonial;