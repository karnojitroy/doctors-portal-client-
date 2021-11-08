import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUserWithEmailPassword, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    const handleLogin = e => {
        loginUserWithEmailPassword(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle(location, history)

    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLogin}>
                        {isLoading && <CircularProgress sx={{ alignItems: 'center' }} />}
                        <br />
                        <TextField
                            required
                            id="standard-basic"
                            label="Email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard"
                            sx={{ width: ' 75%', m: 1 }} />
                        <br />
                        <TextField
                            required
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            autoComplete="current-password"
                            variant="standard"
                            sx={{ width: '75%', m: 1 }}
                        />
                        <br />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ width: '75%', mt: 2 }}
                        >Login</Button>

                        <NavLink
                            to="/register"
                            style={{ textDecoration: "none", pt: 2 }}>
                            <Button variant="text">New User? Please Register!</Button>
                        </NavLink>

                        {user?.email && <Alert severity="success">
                            Login Successful!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p><b>Or</b></p>
                    <Button onClick={handleSignInWithGoogle} variant="contained">Sign In with Google</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" width="100%" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;