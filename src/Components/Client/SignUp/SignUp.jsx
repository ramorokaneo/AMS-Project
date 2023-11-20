// import React from 'react';
// import { Box, Paper, TextField, Button, Typography } from '@mui/material';

// const SignUp = () => {
//     return (
//         <Box
//             sx={{
//                 minHeight: '100vh',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 padding: '20px',
//             }}
//         >
//             <Paper sx={{ padding: '40px', maxWidth: '400px', fontWeight: 'bold' }}>
//                 <Typography variant="h7" align="left" gutterBottom>
//                     SIGN UP
//                 </Typography>

//                 <form>
//                     <TextField id='standard-basic' label="Email" variant='standard' fullWidth size='small' required />

//                     <TextField fullWidth id='standard-basic' label="Password" variant='standard' size='small' type="password" required />

//                     <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, backgroundColor: '#030539' }}   >
//                         Sign Up
//                     </Button>
//                 </form>
//             </Paper>
//         </Box>
//     );
// };

// export default SignUp;



import React from 'react';
import { Box, Paper, TextField, Button, Typography, Grid, Icon } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
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
            <Paper sx={{ padding: '40px', maxWidth: '400px', fontWeight: 'bold' }}>
                <Icon component={PersonAddIcon} fontSize="large" color="primary" />
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
        </Box>
    );
};

export default SignUp;
