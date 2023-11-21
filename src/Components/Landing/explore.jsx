// import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Explore = () => {
  return (
    <Box className="explore-container">
      <Typography variant="h2" align="center">
        EXPLORE
      </Typography>
      <Box
        className="explore-circles-container"
        flexDirection="row"
        justifyContent="space-around"
        mt={3}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          disableElevation
          style={{
            backgroundColor: "#ffd700",
            width: 100,
            height: 100,
            borderRadius: "50%",
          }}
        >
          Buy
        </Button>
        <Button
          variant="contained"
          color="success"
          size="large"
          disableElevation
          style={{
            backgroundColor: "#28a745",
            width: 100,
            height: 100,
            borderRadius: "50%",
          }}
        >
          Sell
        </Button>
        <Button
          variant="contained"
          color="info"
          size="large"
          disableElevation
          style={{
            backgroundColor: "#027e57",
            width: 100,
            height: 100,
            borderRadius: "50%",
          }}
        >
          Support
        </Button>
      </Box>
    </Box>
  );
};

export default Explore;
