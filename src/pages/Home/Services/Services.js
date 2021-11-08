import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';

const services = [
    {
        name: "Fluoride",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia excepturi sequi est deserunt sunt quod itaque, velit autem facere rerum ratione voluptatem esse quo blanditiis rem molestias odio? Enim.",
        img: fluoride

    },
    {
        name: "cavity",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia excepturi sequi est deserunt sunt quod itaque, velit autem facere rerum ratione voluptatem esse quo blanditiis rem molestias odio? Enim.",
        img: cavity

    },
    {
        name: "whitening",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia excepturi sequi est deserunt sunt quod itaque, velit autem facere rerum ratione voluptatem esse quo blanditiis rem molestias odio? Enim.",
        img: whitening

    }
]
const Services = () => {
    return (
        <Box style={{ marginTop: "50px" }} sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: "bold", color: 'primary.main' }} variant="h5" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: "bold" }} variant="h4" component="div">
                    Services We provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        services.map((service, index) => <Service
                            key={index}
                            service={service}
                        ></Service>)
                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default Services;