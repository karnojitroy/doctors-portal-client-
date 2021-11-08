import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people1 from '../../images/people-1.png';
import people2 from '../../images/people-2.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';


const OurBlog = () => {
    return (
        <Container>
            <Box sx={{ my: 5, textAlign: "center" }} >
                <Typography sx={{ color: "info.main" }} variant="h6" gutterBottom component="div">
                    OUR BLOG
                </Typography>
                <Typography component="div" variant="h4">
                    From Our News Blog
                </Typography>
            </Box>
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 1,
                                    // width: 300,
                                    height: "auto",
                                },
                            }}
                        >
                            <Paper sx={{ p: 2, background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)", }}>
                                <Grid container spacing={1}>

                                    <Grid item xs={9} sx={{ textAlign: "left", mb: 2 }}>
                                        <Typography sx={{ color: "info.main" }} variant="h6" gutterBottom component="div">
                                            Rashed Kabir
                                        </Typography>
                                        <Typography variant="caption" display="block" gutterBottom>
                                            4 November 2021
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Typography sx={{ textAlign: "justify", mb: 2 }} variant="h6">
                                    Check at least a doctor in a year for your teeth
                                </Typography>
                                <Box sx={{ textAlign: 'left' }}>
                                    <Link to='/appointment'>
                                        <ArrowForwardIcon sx={{ my: 2 }}></ArrowForwardIcon></Link>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 1,
                                    // width: 300,
                                    height: "auto",
                                },
                            }}
                        >
                            <Paper sx={{ p: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <img src={people1} alt="" width="50" />
                                    </Grid>
                                    <Grid item xs={9} sx={{ textAlign: "left", mb: 2 }}>
                                        <Typography sx={{ color: "info.main" }} variant="h6" gutterBottom component="div">
                                            Winson Herry
                                        </Typography>
                                        <Typography variant="caption" display="block" gutterBottom>
                                            4 November 2021
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography sx={{ textAlign: "justify", mb: 2 }} variant="h6">
                                    2 times of brush in a day can keep your healthy
                                </Typography>
                                <Typography sx={{ textAlign: "justify" }} variant="body2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora voluptatum voluptatem quia fuga.
                                </Typography>

                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 1,
                                    // width: 300,
                                    height: "auto",
                                },
                            }}
                        >
                            <Paper sx={{ p: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <img src={people2} alt="" width="50" />
                                    </Grid>
                                    <Grid item xs={9} sx={{ textAlign: "left", mb: 2 }}>
                                        <Typography sx={{ color: "info.main" }} variant="h6" gutterBottom component="div">
                                            Winson Herry
                                        </Typography>
                                        <Typography variant="caption" display="block" gutterBottom>
                                            4 November 2021
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography sx={{ textAlign: "justify", mb: 2 }} variant="h6">
                                    2 times of brush in a day can keep your healthy
                                </Typography>
                                <Typography sx={{ textAlign: "justify" }} variant="body2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora voluptatum voluptatem quia fuga.
                                </Typography>

                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
};

export default OurBlog;