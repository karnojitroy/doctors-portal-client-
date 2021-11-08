import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: "Teeth Orthodonics1",
        time: "9:00 AM -  4:00 PM",
        space: 10
    },
    {
        id: 2,
        name: "Teeth Orthodonics2",
        time: "9:00 AM -  4:00 PM",
        space: 10
    },
    {
        id: 3,
        name: "Teeth Orthodonics3",
        time: "9:00 AM -  4:00 PM",
        space: 10
    },
    {
        id: 4,
        name: "Teeth Orthodonics4",
        time: "9:00 AM -  4:00 PM",
        space: 10
    },
    {
        id: 5,
        name: "Teeth Orthodonics5",
        time: "9:00 AM -  4:00 PM",
        space: 10
    },
    {
        id: 6,
        name: "Teeth Orthodonics6",
        time: "9:00 AM -  4:00 PM",
        space: 10
    }
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" component="div" sx={{ py: 3, mt: 5, fontWeight: 600, color: "info.main" }}>Available Appointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert
                severity="success"
                sx={{
                    width: "25%",
                    mx: "auto",
                    background: "white",
                    my: 3
                }}
            > Booking successful! </Alert>}

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container >
    );
};

export default AvailableAppointment;