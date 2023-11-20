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
            <Paper
                sx={{
                    padding: '40px',
                    maxWidth: '400px',
                    marginRight: 'auto',
                    '@media (max-width: 1024px)': {
                        // Styles for desktop screens
                        maxWidth: '500px',
                        padding: '60px',
                    },
                    '@media (max-width: 768px)': {
                        // Styles for tablets and smaller screens (e.g., laptops)
                        maxWidth: '300px',
                        padding: '40px',
                    },
                    '@media (max-width: 480px)': {
                        // Styles for mobile devices
                        maxWidth: '250px',
                        padding: '20px',
                    },
                }}
            >
                <Typography variant="h5" align="left" gutterBottom>
                    Sign Up
                </Typography>

                <form>
                    <TextField id="standard-basic" label="Email" variant="standard" fullWidth size="small" required />
                    <p>
                        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" required />

                    </p>
                    <Button type="submit" variant="contained" fullWidth sx={{
                        mt: 2, backgroundColor: '#000044', '&:hover': {
                            backgroundColor: 'AppWorkspace',
                        },
                    }}
                    >
                        Sign Up
                    </Button>


                </form>
            </Paper>
        </Box>
    );
};

export default SignUp;
