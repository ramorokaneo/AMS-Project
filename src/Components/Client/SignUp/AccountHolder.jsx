import React from 'react';
import { Box, Paper, TextField, Button, Typography, Grid } from '@mui/material';
import logoImage from '../../images/logo.png';

const AccountHolder = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: '20px',
            }}
        >
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Paper sx={{ padding: '20px', textAlign: 'center' }}>
                        <img src={logoImage} alt="Logo" style={{ width: '100px' }} />
                        <Typography variant="h5" sx={{ mt: 2 }} gutterBottom>
                            Tell Us About Yourself
                        </Typography>

                        <form>
                            <TextField
                                fullWidth
                                label="Full Name"
                                variant="outlined"
                                margin="normal"
                                required
                            />

                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                required
                            />

                            <TextField
                                fullWidth
                                label="Phone Number"
                                variant="outlined"
                                margin="normal"
                                required
                            />

                            <TextField
                                fullWidth
                                label="Address"
                                variant="outlined"
                                margin="normal"
                                multiline
                                rows={3}
                                required
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Submit
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AccountHolder;
