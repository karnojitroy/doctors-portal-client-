import { Alert, Button, Divider, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        console.log(user);
        fetch('https://obscure-spire-75779.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }

            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <Divider />

            <Divider />
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                    sx={{ width: "25%", mt: 5 }} />
                <br />
                <Button type="submit" variant="contained" sx={{ mt: 3, width: "25%" }}>Make Admin</Button>
            </form>
            {success && <Alert severity="success">
                Made Admin Successful!</Alert>}
        </div>
    );
};

export default MakeAdmin;