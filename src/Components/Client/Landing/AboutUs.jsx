import React from 'react';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default AboutUs;
