// import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const FollowUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#252b42",
        width: "100%",
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // padding: "20px",
        paddingInline: 20,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <IconButton>
          <FontAwesomeIcon size="1x" icon={faPhone} />
        </IconButton>
        <Typography variant="subtitle2">(225) 555-0118</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <IconButton>
          <FontAwesomeIcon color="white" icon={faEnvelope} />
        </IconButton>
        <Typography variant="subtitle2">michelle.rivera@example.com</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Follow us and get a chance to win 80% off
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Follow Us : </Typography>
        <IconButton>
          <FontAwesomeIcon color="white" icon={faInstagram} />
        </IconButton>
        <IconButton>
          <FontAwesomeIcon color="white" icon={faYoutube} />
        </IconButton>
        <IconButton>
          <FontAwesomeIcon color="white" icon={faFacebook} />
        </IconButton>
        <IconButton>
          <FontAwesomeIcon color="white" icon={faTwitter} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FollowUs;
