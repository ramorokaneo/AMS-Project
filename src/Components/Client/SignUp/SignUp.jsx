// import React from 'react';
// import { Box, Paper, TextField, Button, Typography, Grid, Link } from '@mui/material';
// import signUpImage from '../../images/logo.png';
// import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';

// const SignUp = () => {

//     const handleBusinessSignUp = () => {
//         navigate("/businesssignup");
//     };


//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginBottom: '20px'
//             }}
//         >
//             <Grid container justifyContent="center" spacing={2}>
//                 <Grid item xs={20} sm={8} md={6} lg={4}>
//                     <Paper sx={{ padding: '40px', width: '155%' }}>
//                         <img src={signUpImage} alt="Sign Up Image" style={{ width: '100%', maxWidth: '100px' }} />
//                         <Typography variant="h6" align="left" style={{ fontWeight: 'bolder' }} gutterBottom>
//                             SIGN UP
//                         </Typography>

//                         <form>
//                             <TextField id='standard-basic' label="Email" variant='standard' fullWidth size='small' required />

//                             <TextField fullWidth id='standard-basic' label="Password" variant='standard' size='small' type="password" required />

//                             <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#030539' }}   >
//                                 SIGN UP
//                             </Button>

//                         </form>

//                         <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//                             <Link href="/login" underline="none"> ALREADY HAVE AN ACCOUNT? </Link>
//                         </Typography>

//                         <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//                             <Link href="/login" underline="none" sx={{ color: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> SIGN UP WITH GOOGLE
//                             </Link>
//                         </Typography>

//                         <p>
//                             <Button onClick={handleBusinessSignUp}
//                                 variant="outlined">SIGN UP AS A BUSINESS
//                                 <ChevronRightTwoToneIcon /> </Button>
//                         </p>
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </Box >
//     );
// };

// export default SignUp;


import React from 'react';
import { Box, Paper, TextField, Button, Typography, Grid, Link } from '@mui/material';
import signUpImage from '../../images/logo.png';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';

const SignUp = () => {
    const handleBusinessSignUp = () => {
        navigate("/businesssignup");
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
                    <Paper sx={{ padding: '40px', width: '100%' }}>
                        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
                            <img src={signUpImage} alt="Sign Up Image" style={{ width: '100%', maxWidth: '100px' }} />
                        </Box>
                        <Typography variant="h6" align="left" style={{ fontWeight: 'bolder' }} gutterBottom>
                            SIGN UP
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
                            <Link href="/login" underline="none" sx={{ color: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> SIGN UP WITH GOOGLE
                            </Link>
                        </Typography>

                        <Box sx={{ textAlign: 'center' }}>
                            <Button onClick={handleBusinessSignUp} variant="outlined">
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
