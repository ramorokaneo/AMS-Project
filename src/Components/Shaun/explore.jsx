// import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Explore = () => {
  return (
    <Box className="explore-container" style={{ backgroundColor: "red" }}>
      <Typography variant="h3" align="center" color="black">
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
          // color="primary"
          // size="large"
          disableElevation
          style={{
            // marginLeft: "10px",
            backgroundColor: "gold",
            width: 100,
            height: 100,
            borderRadius: "50%",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              height: "4.5rem",
              width: "4.5rem",
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
            <p style={{ fontSize: 14 }}>Buy</p>
          </div>
        </Button>
        <Button
          variant="contained"
          // color="success"
          // size="large"
          disableElevation
          style={{
            backgroundColor: "gold",
            marginLeft: "10px",

            width: 100,
            height: 100,
            borderRadius: "50%",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              height: "4.5rem",
              width: "4.5rem",
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
            <p style={{ fontSize: 14 }}>Sell</p>
          </div>
        </Button>
        <Button
          variant="contained"
          color="info"
          size="large"
          disableElevation
          style={{
            backgroundColor: "gold",
            marginLeft: "10px",

            width: 100,
            height: 100,
            borderRadius: "50%",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              height: "4.5rem",
              width: "4.5rem",
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
