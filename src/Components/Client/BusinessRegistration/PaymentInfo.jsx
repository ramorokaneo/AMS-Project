import React, { useState } from "react";
import { Grid, TextField, Box, MenuItem, Button } from "@mui/material";
import background from "../../Global/images/Reed.jpg";
import logo from "../../Global/images/logo.svg";

const PaymentInfo = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, index) => currentYear + index);
  const months = Array.from({ length: 12 }, (_, index) =>
    (index + 1).toString().padStart(2, "0")
  );
  const expiryOptions = years
    .map((year) => {
      return months.map((month) => `${month}/${year}`);
    })
    .flat();
  const [selectedExpiry, setSelectedExpiry] = useState("");

  const handleExpiryChange = (e) => {
    setSelectedExpiry(e.target.value);
  };

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        // display: "flex",
      }}>
      <Grid container style={{ width: "100%" }}>
        <Grid
          item
          lg={8}
          style={{
            // border: "1px solid",
            // backgroundColor: "blue",
            width: "100%",
          }}></Grid>

        <Grid
          item
          lg={4}
          style={{
            // border: "1px solid red",
            backgroundColor: "#fff",
            width: "100%",
            height: "98vh",
            // marginRight: "5px",
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}>
          <Grid>
            <img src={logo} style={{ height: "8vh", width: "80%" }} />
          </Grid>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off">
            <div
              className="form-container"
              style={{
                justifyContent: "center",
                textAlign: "center",
                width: "80%",
              }}>
              <h2 style={{ color: "#000", textAlign: "left" }}>payment info</h2>
              {/* <h6>inputs will be stored here</h6> */}

              <TextField
                id="outlined-number"
                label="Card Holder"
                type="text"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: "100%" }}
              />
              <br />
              <TextField
                id="outlined-number"
                label="Card Number"
                type="number"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{
                  //   backgroundColor: "dodgerblue",
                  width: "100%",
                  marginBottom: "10px",
                }}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Expiry"
                variant="standard"
                // helperText="Please select your currency"
                value={selectedExpiry}
                onChange={handleExpiryChange}
                style={{ width: "48%" }}>
                {expiryOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-number"
                label="Cvv"
                type="text"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: "50%", marginLeft: "5px" }}
              />
              <Button
                variant="contained"
                style={{
                  width: "80%",
                  marginTop: "10px",
                  background: "#072840",
                  borderRadius: "30px"
                }}>
                continue
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default PaymentInfo;
