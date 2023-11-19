import React from "react";
import { Grid } from "@mui/material";
import lion from "../Global/images/BigLion..png"; // Make sure the path is correct
import shadowLogo from "./images/Shadow_Logo.png";

export function Footer() {
  return (
    <Grid
      container
      style={{
        backgroundColor: "#070F18",
        width: "100vw",
        // height: "25vh",
        padding: "20px", // Add padding for better spacing
      }}>
      <Grid item lg={12} style={{ display: "flex", flexDirection: "row" }}>
        {/* Section 1 */}
        <Grid item lg={6} style={{ padding: "10px" , border:"1px solid"}}></Grid>
        <Grid item lg={6} style={{ padding: "10px" ,border:"1px solid"}}>
          <img
            src={shadowLogo}
            style={{ width: "50%", paddingTop: 50 }}
            alt="Marketing Services"
          />

          <h2 style={{ fontSize: 15 }}>Marketing Services</h2>
          <p style={{ fontSize: 10 }}>
            Welcome to AMS, where we specialize in building beautiful brands,
            marketing African businesses, and connecting them with a global
            customer base, driving sales of their exceptional products and
            services.
          </p>
          <p className="atlegile-footer-email-text">atlegilemarketing.co.za</p>
        </Grid>
        <Grid
          item
          lg={6}
          style={{
            display: "flex", 
            border:"1px solid",
            flexDirection: "column",
            justifyContent: "center", // Align items vertically at the center
          }}>
          <div>
            <a href="#">
              <h6 style={{ color: "#FFF" }}>ORDER HISTORY</h6>
            </a>
            <a href="#">
              <h6 style={{ color: "#FFF" }}>TERMS & CONDITIONS</h6>
            </a>
            <a href="#">
              <h6 style={{ color: "#FFF" }}>PRIVACY POLICY</h6>
            </a>
          </div>
        </Grid>
        <Grid item lg={6} style={{ padding: "10px" ,border:"1px solid" }}>
          {/* Use the imported image */}
        </Grid>
      </Grid>
      <Grid
        item
        lg={10}
        style={{
          display: "flex",
          justifyContent: "center", // Center along the x-axis
          alignItems: "center", // Center along the y-axis
        }}>
        {/* Section 2 */}
        <div>
          <p style={{ textAlign: "center" }}>
            Atlegile Marketing Solutions (Pty) Ltd eCommerce 2023
          </p>
        </div>
      </Grid>
      <Grid
        item
        lg={2}
        style={{
          padding: "10px",
          background: "#070F18",
          Opacity: 0.3,
        }}>
        {/* Use the imported image */}
        <img
          src={lion}
          style={{ width: "100%", opacity: 0.3, height: 120 }}
          alt="lion-image"
        />
      </Grid>
    </Grid>
  );
}
