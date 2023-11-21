// // import React from 'react';
// // import { Box, Paper, TextField, Button, Typography, Grid } from '@mui/material';
// // import logoImage from '../../images/logo.png';

// // const AccountHolder = () => {


// //     return (
// //         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px', }}
// //         >
// //             <Grid container justifyContent="flex-end" spacing={2}>
// //                 <Grid item xs={12} sm={8} md={6} lg={4}>
// //                     <Paper sx={{ padding: '20px', textAlign: 'center' }}>
// //                         <img src={logoImage} alt="Logo" style={{ width: '100px' }} />


// //                         <Box>
// //                             <Typography variant="subtitle1" sx={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }} gutterBottom>
// //                                 Main Account Holder
// //                             </Typography>
// //                             <Typography variant="subtitle1" sx={{ textAlign: 'left', fontSize: '17px', marginTop: '1px', fontWeight: 'bold' }} gutterBottom>
// //                                 TELL US ABOUT YOURSELF
// //                             </Typography>
// //                         </Box>

// //                         <form>
// //                             <TextField fullWidth label="Full Name" variant="standard" margin="small" />

// //                             <TextField fullWidth label="Surname" variant="standard" margin="small" />

// //                             <TextField fullWidth label="Phone Number" variant="standard" margin="normal" />

// //                             <TextField fullWidth label="Email" variant="standard" margin="normal" />

// //                             <TextField fullWidth label="Location" variant="standard" margin="normal" />

// //                             <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, borderRadius: "30px", backgroundColor: "#072840" }} > CONTINUE </Button>


// //                         </form>
// //                     </Paper>
// //                 </Grid>
// //             </Grid>
// //         </Box>
// //     );
// // };

// // export default AccountHolder;




// import React, { useState } from 'react';
// import { Box, Paper, TextField, Button, Typography, Grid, MenuItem, FormControl, Select } from '@mui/material';
// import logoImage from '../../images/logo.png';

// const AccountHolder = () => {
//     const [gender, setGender] = useState('');

//     const handleGenderChange = (event) => {
//         setGender(event.target.value);
//     };


//     return (
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
//             <Grid container justifyContent="flex-end" spacing={2}>
//                 <Grid item xs={12} sm={8} md={6} lg={4}>
//                     <Paper sx={{ padding: '20px', textAlign: 'center' }}>
//                         <img src={logoImage} alt="Logo" style={{ width: '100px' }} />

//                         <Box>
//                             <Typography variant="subtitle1" sx={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }} gutterBottom>
//                                 Main Account Holder
//                             </Typography>
//                             <Typography variant="subtitle1" sx={{ textAlign: 'left', fontSize: '17px', marginTop: '1px', fontWeight: 'bold' }} gutterBottom>
//                                 TELL US ABOUT YOURSELF
//                             </Typography>
//                         </Box>

//                         <form>
//                             <TextField fullWidth label="Full Name" variant="standard" margin="small" />
//                             <TextField fullWidth label="Surname" variant="standard" margin="small" />
//                             <TextField fullWidth label="Phone Number" variant="standard" margin="normal" />
//                             <TextField fullWidth label="Email" variant="standard" margin="normal" />
//                             <FormControl fullWidth variant="standard" sx={{ mt: 2 }}>
//                                 <Select value={gender} onChange={handleGenderChange} displayEmpty inputProps={{ 'aria-label': 'Gender' }}
//                                 >
//                                     <MenuItem value="Gender" disabled>  Select Gender </MenuItem>

//                                     <MenuItem value="male">Male</MenuItem>
//                                     <MenuItem value="female">Female</MenuItem>
//                                     <MenuItem value="other">Other</MenuItem>
//                                 </Select>
//                             </FormControl>
//                             <TextField fullWidth label="Location" variant="standard" margin="normal" />



//                             <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, borderRadius: '30px', backgroundColor: '#072840' }}> CONTINUE </Button>
//                         </form>
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

// export default AccountHolder;


import React from 'react';
import { Box, Paper, TextField, Button, Typography, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import signUpImage from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';


const AccountHolder = () => {
    const navigate = useNavigate();

    const handleContact = () => {
        navigate("./altcontact")
    };


    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center' }}>
                        <Box>
                            <img src={signUpImage} alt="Sign Up Image" style={{ width: '100%', maxWidth: '100px' }} />
                        </Box>
                        <Typography variant="h7" gutterBottom fontWeight="bold" textAlign="left"> Main Account Holder</Typography>
                        <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="left">
                            Tell Us About Yourself
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField fullWidth label="Full Name" variant="standard" margin="normal" />
                            <TextField fullWidth label="Surname" variant="standard" margin="normal" />
                            <TextField fullWidth label="Email" variant="standard" margin="normal" />
                            <TextField fullWidth label="Phone Number" variant="standard" margin="normal" />
                            <FormControl fullWidth variant="standard" margin="normal" >
                                <InputLabel id="gender-label">Gender</InputLabel>
                                <Select labelId="gender-label" label="Gender">
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField fullWidth label="Address" variant="standard" margin="normal"

                            />
                            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, borderRadius: '40px', backgroundColor: '#072840' }} onClick={handleContact}>
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
