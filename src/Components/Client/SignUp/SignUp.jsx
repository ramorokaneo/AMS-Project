import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

const SignUp = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Paper className={classes.paper}>
                    <Typography variant="h4" gutterBottom>
                        Sign Up
                    </Typography>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField
                            required
                            id="outlined-required"
                            label="Username"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            variant="outlined"
                        />
                        <Button variant="contained" color="primary">
                            Sign Up
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default SignUp;
