import React from 'react';
import { Box, Paper, TextField, Button, Typography } from '@mui/material';

const SignUp = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
            }}
        >
            <Paper sx={{ padding: '40px', maxWidth: '400px' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Sign Up
                </Typography>

                <form>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        required
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        required
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Sign Up
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default SignUp;
