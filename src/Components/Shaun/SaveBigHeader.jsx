// import React from "react";
import { Box, Typography, IconButton, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SaveBigHeader = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100vw",
        height: "20vh",
        backgroundColor: "#252b42",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton>
          <FontAwesomeIcon icon={faChevronLeft} style={{ color: "white" }} />
        </IconButton>
        <Box
          sx={{
            marginLeft: "35px",
            textAlign: "left",
            fontFamily: "Arial",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "20vh",
          }}
        >
          <Typography variant="h4" color="white" sx={{ fontSize: "30px" }}>
            Exclusive Offer : Save Big Today!
          </Typography>
          <Typography variant="h6" color="white" className="smart-tv-text">
            Ultra HD Smart TV
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="subtitle2"
              color="white"
              sx={{ fontSize: "24px" }}
            >
              R1699.99
            </Typography>
            <Typography
              variant="subtitle2"
              color="white"
              sx={{ marginRight: "10px" }}
            >
              R1899.99
            </Typography>
          </Box>
        </Box>
      </Box>
      <IconButton>
        <FontAwesomeIcon icon={faChevronRight} style={{ color: "white" }} />
      </IconButton>
    </Paper>
  );
};

export default SaveBigHeader;
