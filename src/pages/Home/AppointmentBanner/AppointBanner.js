import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appointment_Bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';
import { fontSize } from '@mui/system';

const appointmentBg = {
    background: `url(${appointment_Bg})`,
    backgroundColor: "rgba(138, 138, 138, 0.7)",
    backgroundBlendMode: "darken, luminosity",
    marginTop: 175
}
const AppointBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: "400px", height: "auto", marginTop: "-115px" }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{
                        display: "flex",
                        justifyContent: 'flex-start',
                        textAlign: "left",
                        alignItem: "center"
                    }}>
                    <Box>
                        <Typography variant="h6" sx={{ color: "primary.main", my: 3 }}>
                            APPOINTMENT
                        </Typography>
                        <Typography variant="h4" style={{ color: "white" }} sx={{ my: 2 }}>
                            Male An Appointment Today
                        </Typography  >
                        <Typography variant="h6" style={{ fontSize: 12, marginBottom: 30, color: "white" }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores vero officia ullam natus, esse, debitis nostrum reprehenderit minus similique reiciendis nihil ad, illum fugiat deleniti quis? Eveniet ratione fugiat voluptate.
                        </Typography>
                        <Button variant="contained">Learn more</Button>
                    </Box>

                </Grid>
            </Grid>
        </Box >
    );
};

export default AppointBanner;