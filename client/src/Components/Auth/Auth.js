import React from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
export default function Auth() {
    const classes = useStyles();
    const isSignup = false;
    const handleSubmit = () => {

    };

    const handleChange = () => {

    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>
                    {isSignup ? (
                        'Sign Up'
                    ) : (
                        'Sign In'
                    )}</Typography>
                <from className={classes.form} onSubmit={handleSubmit}></from>
                <Grid container spacing={2}>
                    {isSignup && (
                        <>
                            <Grid xs={6} ms={12}>
                                <TextField name='firstName' label="First Name" handleChange={handleChange} autoFocus xs={6} />
                            </Grid>

                            <Grid xs={6} ms={12}>
                                <TextField name='firstName' label="First Name" handleChange={handleChange} autoFocus xs={6} />
                            </Grid>

                            <TextField name='lastName' label="Last Name" handleChange={handleChange} autoFocus xs={6} />

                        </>
                    )}
                </Grid>
            </Paper>

        </Container>
    )
}
