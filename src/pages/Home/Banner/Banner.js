import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { height } from '@mui/system';


const bannerBg = {
    background: `url(${bg})`,

}
const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height: 400
}



const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1, mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
                    <Box>
                        <Typography variant="h2">
                            Your New Smile <br />
                            Start Here
                        </Typography>
                        <Typography sx={{ color: "gray", my: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi pariatur vitae, dicta fugiat illo totam necessitatibus eos nihil ex expedita, ipsam corporis cupiditate dolor magni dolorem delectus ea consequatur voluptatum.
                        </Typography>
                        <Button variant="contained">GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: "400px" }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Banner;