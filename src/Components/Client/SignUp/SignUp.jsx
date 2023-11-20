import React from 'react';
import { Box, Paper, TextField, Button, Typography, Grid, Link } from '@mui/material';
import signUpImage from '../../images/logo.png';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

    const navigate = useNavigate();

    const handleBusinessSignUp = () => {
        navigate("/businesssignup");
    };

    const handleShop = () => {
        navigate("./landingscreen")
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Paper sx={{ padding: '40px', width: '300%' }}>
                        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
                            <img src={signUpImage} alt="Sign Up Image" style={{ width: '100%', maxWidth: '100px' }} />
                        </Box>
                        <Typography variant="h6" align="left" style={{ fontWeight: 'bolder' }} gutterBottom>
                            SIGN UP
                            <Button>

                            </Button>
                        </Typography>

                        <form>
                            <TextField id='standard-basic' label="Email" variant='standard' fullWidth size='small' required />
                            <TextField fullWidth id='standard-basic' label="Password" variant='standard' size='small' type="password" required />
                            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#030539' }}   >  SIGN UP </Button>
                        </form>

                        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                            <Link href="/login" underline="none"> ALREADY HAVE AN ACCOUNT? </Link>
                        </Typography>

                        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                            <Link href="/login" underline="none" sx={{ color: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: "30px" }}> SIGN UP WITH GOOGLE
                            </Link>
                        </Typography>

                        <Box sx={{ textAlign: 'center', marginTop: '10%' }}>
                            <Button style={{borderRadius: '30px', width: '500px'}} onClick={handleBusinessSignUp} variant="outlined">
                                SIGN UP AS A BUSINESS
                                <ChevronRightTwoToneIcon />
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SignUp;
