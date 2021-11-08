import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, setIsLoading, authError, setAuthError } = useAuth();

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not match');
            return;
        }
        // else if (loginData.email === user.email) {
        //     alert('Already used this email');
        // }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>

                    <form onSubmit={handleRegisterSubmit}>
                        {isLoading && <CircularProgress sx={{ alignItems: 'center' }} />}
                        <br />
                        <TextField
                            required
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard"
                            sx={{ width: ' 75%', m: 1 }} />
                        <TextField
                            required
                            id="standard-basic"
                            label="Email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                            sx={{ width: ' 75%', m: 1 }} />
                        <br />
                        <TextField
                            required
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard"
                            sx={{ width: '75%', m: 1 }}
                        />
                        <TextField
                            required
                            id="standard-password-input"
                            label="Re-type your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard"
                            sx={{ width: '75%', m: 1 }}
                        />
                        <br />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ width: '75%', mt: 2 }}
                        >Register</Button>

                        <NavLink
                            to="/login"
                            style={{ textDecoration: "none", pt: 2 }}>
                            <Button variant="text">Already registered? Please Login!</Button>
                        </NavLink>

                        {user?.email && <Alert severity="success">
                            Account created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" width="100%" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;