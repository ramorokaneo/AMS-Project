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
            width: 90,
            height: 90,
            borderRadius: "50%",
          }}
        >
          <div
            style={{
              backgroundColor: "red",
              height: "4.6rem",
              width: "4.6rem",
              color: "white",
              /* align-self: center, */
              /* padding: 0.5rem, */
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: 14 }}>Support</p>
          </div>
        </Button>
      </Box>
    </Box>
  );
};

export default Explore;
