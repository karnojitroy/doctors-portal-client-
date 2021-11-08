import { Button, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { width } from '@mui/system';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};
const BookingModal = ({ booking, date, openBooking, handleCloseBooking, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const updateInfo = { ...bookingInfo };
        updateInfo[field] = value;
        setBookingInfo(updateInfo);
    }
    // console.log(bookingInfo);

    const handleBookingSubmit = e => {
        e.preventDefault();
        const appointment = {
            ...bookingInfo,
            serviceName: name,
            time,
            date: date.toLocaleDateString()
        }

        console.log(appointment);

        // send to servers
        fetch('https://obscure-spire-75779.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                setBookingSuccess(true);
                handleCloseBooking();
            })
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleCloseBooking}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography variant="h6" sx={{ color: "info.main", textAlign: "center" }} display="block" gutterBottom>
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: "100%", my: 1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: "100%", my: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <TextField
                            required
                            sx={{ width: "100%", my: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                            defaultValue={user.displayName}
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            required
                            sx={{ width: "100%", my: 1 }}
                            id="outlined-size-small"
                            name="email"
                            defaultValue={user.email}
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            required
                            sx={{ width: "100%", my: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            placeholder="Your Phone Number"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ alignItems: "right" }}
                        >Submit</Button>

                    </form>
                </Box>
            </Fade>
        </Modal >
    );
};

export default BookingModal;