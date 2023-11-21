import React from "react";
import { Typography, Box, TextField, Button, Grid } from '@mui/material';

const AlternativeContact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle form submission here
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="left">
                        Alternative Contact Information
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField fullWidth label="Full Name" variant="standard" margin="normal" />
                        <TextField fullWidth label="Email" variant="standard" margin="normal" />
                        <TextField fullWidth label="Phone Number" variant="standard" margin="normal" />
                        <TextField fullWidth label="Relationship" variant="standard" margin="normal" />
                        <TextField fullWidth label="Address" variant="standard" margin="normal" />
                        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, borderRadius: '40px', backgroundColor: '#072840' }}>
                            Submit
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AlternativeContact;
