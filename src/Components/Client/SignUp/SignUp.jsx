// import React from 'react';
// import { Box, Paper, TextField, Button, Typography, Grid, Link, IconButton } from '@mui/material';
// import signUpImage from '../../images/logo.png';
// import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
// import { useNavigate } from 'react-router-dom';


// const SignUp = () => {


//     // const navigate = useNavigate();

//     // const handleBusinessSignUp = () => {
//     //     navigate("/businesssignup");
//     // };

//     // const handleShop = () => {
//     //     navigate("./landingscreen")
//     // };

//     // const handleSignUp = () => {
//     //     navigate("./accountholder");
//     // }

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'flex-end',
//                 alignItems: 'center',
//                 padding: '20px',
//             }}
//         >
//             <Grid container spacing={2} justifyContent="flex-start">
//                 <Grid item xs={12} sm={8} md={6} lg={4}>
//                     <Paper sx={{ padding: '40px', width: '300%' }}>
//                         <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
//                             <img src={signUpImage} alt="Sign Up Image" style={{ width: '100%', maxWidth: '100px' }} />
//                         </Box>
//                         <Typography variant="h6" align="left" style={{ fontWeight: 'bolder' }} gutterBottom>
//                             SIGN UP
//                             <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-25px' }}>

//                                 <Button onClick={handleShop}>
//                                     SHOP  <ChevronRightTwoToneIcon />
//                                 </Button>
//                             </Box>

//                         </Typography>

//                         <form>
//                             <TextField id='standard-basic' label="Email" variant='standard' fullWidth size='small' />
//                             <TextField fullWidth id='standard-basic' label="Password" variant='standard' size='small' type="password">
//                             </TextField>


//                             <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#030539', borderRadius: '50px' }} onClick={handleSignUp}  >  SIGN UP </Button>
//                         </form>

//                         <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//                             <Link href="/login" underline="none"> ALREADY HAVE AN ACCOUNT? </Link>
//                         </Typography>

//                         <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//                             <Link href="/login" underline="none" sx={{ color: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: "5px", marginTop: '10px' }}> SIGN UP WITH GOOGLE
//                             </Link>
//                         </Typography>

//                         <Box sx={{ textAlign: 'center', marginTop: '15%' }}>
//                             <Button style={{ borderRadius: '30px', width: '500px' }} onClick={handleBusinessSignUp} variant="outlined">
//                                 SIGN UP AS A BUSINESS
//                                 <ChevronRightTwoToneIcon />
//                             </Button>
//                         </Box>
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

// export default SignUp;



import React from 'react';
import { Box, Paper, TextField, Button, Typography, Grid } from '@mui/material';
import signUpImage from '../../images/logo.png';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSignUp = () => {
        navigate("./accountholder");
    }
    const navigate = useNavigate();

    const handleShop = () => {
        navigate("./landingscreen")
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleBusinessSignUp = () => {
        navigate("/businesssignup");
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px', width: '200%' }}>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center' }}>
                        <Box>
                            <img src={signUpImage} alt="Sign Up Image" style={{ width: '100%', maxWidth: '100px' }} />
                        </Box>
                        <Typography variant="h5" gutterBottom textAlign="left" fontWeight="bold" marginTop="30px">
                            SIGN UP
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-45px' }}>
                            <Button sx={{ marginBottom: '40px' }} onClick={handleShop}>SHOP <ChevronRightTwoToneIcon /></Button>
                        </Box>

                        <form onSubmit={handleSubmit}>
                            <TextField id='standard-basic' label="Email" variant='standard' fullWidth size='small' />
                            <TextField label="Password" variant="standard" margin="normal" type="password" fullWidth />

                            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, width: '100%', backgroundColor: '#072840', borderRadius: '50px' }} onClick={handleSignUp}  >
                                Sign Up
                            </Button>

                            <Typography>
                                <Link href="/login" underline="none" > ALREADY HAVE AN ACCOUNT? </Link>
                            </Typography>

                            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                                <Link href="/login" underline="none" sx={{ color: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: "5px", marginTop: '10px' }}>
                                    SIGN UP WITH GOOGLE
                                </Link>
                            </Typography>

                            <Button type="submit" variant="outlined" fullWidth sx={{ mt: 2, width: '100%', borderRadius: '50px' }} onClick={handleBusinessSignUp}>
                                SIGN UP AS A BUSSINESS <ChevronRightTwoToneIcon />
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SignUp;
