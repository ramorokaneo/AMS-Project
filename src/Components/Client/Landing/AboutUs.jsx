import React from 'react';
import { Card, CardContent, Container, Grid, Typography, Box } from '@mui/material';
import Logo from "../../Global/images/Logo.png";
import plane from "../../Global/images/plane.png";
import biggerlion from "../../Global/images/bigger-lion.png"

const AboutUs = () => {
  return (
    <Container style={{ backgroundColor: 'white' }}>
        
      <img src={Logo} alt="Company Logo" style={{ width: '15%', marginTop: '20px' }} />

      <Typography variant="h3" gutterBottom>
        <strong>ATLEGILE MARKETING SOLUTIONS</strong>
      </Typography>

      <Typography paragraph></Typography>
      <Typography variant="body2" color="text.primary">
        Welcome to Atlegile Marketing Solutions (Pty) Ltd, where passion, purpose, and expertise collide to create exceptional Marketing strategies. Our Youth Woman-owned and led Business, based in South Africa, was founded in 2015, and we've been on an exciting journey with our Partners ever since. From ground level to the Digital space, we're committed to building strong Brands, effectively Communicating products + service offerings, and transferring our Skills to help you engage with the Online Market Successfully.
      </Typography>

      <Typography paragraph></Typography>

      <Typography variant="body2" color="text.primary">
        AMS is dedicated to helping African businesses succeed by developing strong brands, marketing their products and services effectively, and connecting them with a global customer base. They aim to drive sales, increase revenue, and create a lasting impact.
      </Typography>

      <Typography paragraph></Typography>

      <Grid container spacing={0.5} justifyContent="center">
      
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ border: '1px solid gray', borderRadius: 0, height: '100%' }}>
            <CardContent>

              <Typography variant="h6" component="div">
                <strong>WHAT WE OFFER</strong>
              </Typography>

              <Typography paragraph></Typography>

              <Typography variant="body2" color="text.primary">
                Ams creates strong influential brands, by applying tailored market approaches + using compelling content, to effectively communicate, build and manage good relations with online communities. We support ESD + marketing departments and agencies.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ border: '1px solid grey', borderRadius: 0, height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="div">
                <strong>ABOUT AMS</strong>
              </Typography>
              <Typography paragraph></Typography>
              <Typography variant="body2" color="text.primary">
                Atlegile Marketing Solutions (Pty) Ltd is a 360 create brand marketing company that assists African businesses to reach their intended audience from online to offline. We are located in Pimville, Soweto, and serve our partners online.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ border: '1px solid grey', borderRadius: 0, height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="div">
                <strong>OUR USP</strong>
              </Typography>
              <Typography paragraph></Typography>
              <Typography variant="body2" color="text.primary">
                We use a unique strategic brand approach that is coupled with creativity, while transferring 8 years of professional quality service.
                <Typography paragraph></Typography>
                <strong>#AGILE IS WHAT ATLEGILE IS ABOUT</strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography paragraph></Typography>

      <img src={plane} alt="Description of the image" style={{ width: '100%', marginTop: '20px' }} />

      <Typography paragraph></Typography>

      <Typography variant="body2" color="text.primary" style={{ marginTop: '20px', marginRight: "71%"}}>
        Business Research and Youth Development Project
      </Typography>

    
      <Typography paragraph style={{ marginLeft: '15px' }}></Typography>

      
      <Typography variant="h5" color="text.primary" style={{ marginLeft: '15px' }}>
      <strong> AMS IS GUIDED BY SEVERAL CORE VALUES</strong>
      </Typography> 
      <Grid container spacing={1} justifyContent="center" alignItems="center">
      <Grid item>
      <Box sx={{ width: '203px', height: '54px', backgroundColor: '#203E53' }}>
        <Typography variant="h5" sx={{ color: 'white', textAlign: 'center', lineHeight: '54px' }}>
          PASSION
        </Typography>
      </Box>
    </Grid>
  <Grid item>
    <Box sx={{ width: '243px', height: '54px', backgroundColor: '#203E53' }} >
    <Typography variant="h5" sx={{ color: 'white', textAlign: 'center', lineHeight: '54px' }}>
          INNOVATION
        </Typography>
        </Box>
  </Grid>
  <Grid item>
    <Box sx={{ width: '329px', height: '54px', backgroundColor: '#203E53' }} >
    <Typography variant="h5" sx={{ color: 'white', textAlign: 'center', lineHeight: '54px' }}>
        GLOBAL CONNECTION
        </Typography>
        </Box>
  </Grid>
  <Grid item>
    <Box sx={{ width: '264px', height: '54px', backgroundColor: '#203E53' }} >
    <Typography variant="h5" sx={{ color: 'white', textAlign: 'center', lineHeight: '54px' }}>
        SOCIAL IMAPACT
        </Typography>
        </Box>
  </Grid>

  <Grid item>
    <Box sx={{ margin: '0 16px' }} />
  </Grid>
 
  <Grid item>
    <Box sx={{ width: '203px', height: '54px', backgroundColor: '#203E53' }} >
    <Typography variant="h5" sx={{ color: 'white', textAlign: 'center', lineHeight: '54px' }}>
        SKILLS DEVELOPMENT
        </Typography>
        </Box>
  </Grid>
  <Grid item>
    <Box sx={{ width: '243px', height: '54px', backgroundColor: '#203E53' }} >
    <Typography variant="h5" sx={{ color: 'white', textAlign: 'center', lineHeight: '54px' }}>
        CREATIVITY
        </Typography>
        </Box>
  </Grid>
</Grid>
<img src={biggerlion} alt="lion" style={{ width: '120%', marginTop: 0 }} />
    </Container>
  );
};

export default AboutUs;
