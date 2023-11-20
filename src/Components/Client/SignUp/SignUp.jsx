import React from 'react';
import { Box, Paper, TextField, Button, Typography, Grid } from '@mui/material';
import signUpImage from '../../images/logo.png'; 

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
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Paper sx={{ padding: '40px' }}>
                        <img src={signUpImage} alt="Sign Up Image" style={{ width: '100%', marginBottom: '20px', maxWidth: '300px' }} /> {/* Add your image with increased width */}
                        <Typography variant="h6" align="center" gutterBottom>
                            Sign Up
                        </Typography>

                        <form>
                            <TextField id='standard-basic' label="Email" variant='standard' fullWidth size='small' required />

                            <TextField fullWidth id='standard-basic' label="Password" variant='standard' size='small' type="password" required />

                            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, backgroundColor: '#030539' }}   >
                                Sign Up
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SignUp;
