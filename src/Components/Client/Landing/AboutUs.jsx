import React from 'react';
import { Card, CardContent, Container, Grid, Typography, Box } from '@mui/material';
import Logo from "../../Global/images/Logo.png";
import plane from "../../Global/images/plane.png";
import biggerlion from "../../Global/images/bigger-lion.png";
import Nav from "../../Global/Nav";
import Footer from '../../Global/Footer';

const AboutUs = () => {
  return (
    <Container sx={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <Nav />
      <Container sx={{ margin: 'auto', textAlign: 'center', marginTop: '10%' }}>
        <img src={Logo} alt="Company Logo" sx={{ width: '15%' }} />
        <Typography variant="h3" gutterBottom>
          <strong>ATLEGILE MARKETING SOLUTIONS</strong>
        </Typography>
      </Container>

      <Container>
        <Typography paragraph></Typography>
        <Typography variant="body2" color="text.primary">
          Welcome to Atlegile Marketing Solutions (Pty) Ltd, where passion, purpose, and expertise collide to create exceptional Marketing strategies. Our Youth Woman-owned and led Business, based in South Africa, was founded in 2015, and we've been on an exciting journey with our Partners ever since. From ground level to the Digital space, we're committed to building strong Brands, effectively Communicating products + service offerings, and transferring our Skills to help you engage with the Online Market Successfully.
        </Typography>
        <Typography paragraph></Typography>
        <Typography variant="body2" color="text.primary">
          AMS is dedicated to helping African businesses succeed by developing strong brands, marketing their products and services effectively, and connecting them with a global customer base. They aim to drive sales, increase revenue, and create a lasting impact.
        </Typography>
        <Typography paragraph></Typography>
      </Container>

      <Container>
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
      </Container>

      <Container>
        <img src={plane} alt="Description of the image" sx={{ width: '100%', marginTop: '20px' }} />
        <Typography paragraph></Typography>
        <Typography variant="body2" color="text.primary" sx={{ marginTop: '20px' }}>
          Business Research and Youth Development Project
        </Typography>
        <Typography paragraph sx={{ marginLeft: '15px' }}></Typography>
      </Container>

      <Container>
        <Typography variant="h5" color="text.primary" sx={{ marginLeft: '15px', marginTop: "10%", marginBottom: "20px"}}>
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
                SOCIAL IMPACT
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
        <Typography paragraph></Typography>
      </Container>

      <Container>
        <Typography variant="h4" color="#203E53">
          <strong>AMS aims to not only help businesses grow but also make a positive impact on society by nurturing local talent and fostering sustainable business growth.</strong>
        </Typography>
      </Container>

      <Container>
        <img src={biggerlion} alt="lion" sx={{ width: '150%' }} />
      </Container>

      <Container>
        <Footer />
      </Container>

      <style>{`
        @media (max-width: 768px) {
          /* Adjust styles for smaller screens here */
          /* Example: */
          /* .your-class {
               width: 100%;
          } */
        }

        @media (min-width: 769px) {
          /* Adjust styles for larger screens here */
          /* Example: */
          /* .your-class {
               width: 50%;
          } */
        }
      `}</style>
    </Container>
  );
};

export default AboutUs;
