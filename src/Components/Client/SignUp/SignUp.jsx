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
            <Paper sx={{ padding: '40px', maxWidth: '400px', marginRight: 'auto' }}>
                <Typography variant="h5" align="left" gutterBottom>
                    Sign Up
                </Typography>

                <form>
                    <TextField id='standard-basic' label="Email" variant='standard' fullWidth size='small' required />
                    <p>
                        <TextField id="outlined-password-input" label="Password" type="password"  autoComplete="current-password" variant="standard" required/>
                    </p>
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
