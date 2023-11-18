import React from "react";
import { Grid, Paper } from "@mui/material";
import lion from "../../assets/lion.png"; // Make sure the path is correct

export function Footer() {
  return (
    <Grid
      container
      style={{
        backgroundColor: "#070F18",
        width: "100vw",
        border: "1px solid",
        padding: "20px", // Add padding for better spacing
      }}>
      <Grid item lg={12} style={{ display: "flex", flexDirection: "row" }}>
        {/* Section 1 */}
        <Grid item lg={6} style={{ border: "1px solid", padding: "10px" }}>
          <h3>Marketing Services</h3>
          <p>
            Welcome to AMS, where we specialize in building beautiful brands,
            marketing African businesses, and connecting them with a global
            customer base, driving sales of their exceptional products and
            services.
          </p>
          <p className="atlegile-footer-email-text">atlegilemarketing.co.za</p>
        </Grid>
        <Grid item lg={6} style={{ border: "1px solid", padding: "10px" }}>
          <h2>hello world1</h2>
        </Grid>
        <Grid item lg={6} style={{ border: "1px solid", padding: "10px" }}>
          <h2>hello world1</h2>
        </Grid>
        <Grid item lg={6} style={{ border: "1px solid", padding: "10px" }}>
          
            {/* Use the imported image */}
            <img
              src={lion}
              style={{ width: "100%", background: "#070F18" }}
              alt="lion-image"
            />
        </Grid>
      </Grid>
      <Grid item lg={12}>
        {/* Section 2 */}
        <p style={{ textAlign: "center" }}>
          Atlegile Marketing Solutions (Pty) Ltd eCommerce 2023{" "}
        </p>
      </Grid>
    </Grid>
  );
}
