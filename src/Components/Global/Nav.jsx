// import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
// import { useFetchProfileData } from "../../hooks/useFetchUsers";

const Navbar = () => {
  const uid = localStorage.getItem("user");
  //   const { userData } = useFetchProfileData(uid);
  const userData = null;
  return (
    <AppBar style={{ backgroundColor: "white" }}>
      <Toolbar sx={{ color: "#252b42" }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h6">
            <img
              src="images/logo.png"
              alt="Your Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
          </Typography>
        </Link>
        <div style={{ marginLeft: "auto" }}>
          {!uid ? (
            <div>
              <Button
                sx={{
                  borderRadius: "25px",
                  "&:hover": {
                    backgroundColor: "#252b42",
                    borderRadius: "25px",
                    color: "white",
                  },
                }}
                color="inherit"
                component={Link}
                to="/shop"
              >
                Shop
              </Button>
              <Button
                sx={{
                  borderRadius: "25px",
                  "&:hover": {
                    backgroundColor: "#252b42",
                    borderRadius: "25px",
                    color: "white",
                  },
                }}
                color="inherit"
                component={Link}
                to="/about-us"
              >
                About Us
              </Button>
              <Button
                sx={{
                  transition: "backgroundCcolor 0.3s, color 0.3s",
                  border: "1px solid #252b42",
                  borderRadius: "25px",
                  marginLeft: "10px",
                  "&:hover": {
                    backgroundColor: "#252b42",
                    borderRadius: "25px",
                    color: "white",
                  },
                }}
                color="inherit"
                component={Link}
                to="/sign-in"
              >
                Sign In
              </Button>
              <Button
                sx={{
                  transition: "backgroundCcolor 0.3s, color 0.3s",
                  border: "1px solid #252b42",
                  borderRadius: "25px",
                  marginLeft: "10px",

                  "&:hover": {
                    backgroundColor: "#252b42",
                    borderRadius: "25px",
                    color: "white",
                  },
                }}
                color="inherit"
                component={Link}
                to="/sign-up"
              >
                Sign Up
              </Button>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                sx={{
                  borderRadius: "25px",
                  "&:hover": {
                    backgroundColor: "#252b42",
                    borderRadius: "25px",
                    color: "white",
                  },
                }}
                color="inherit"
                component={Link}
                to="/shop"
              >
                Shop
              </Button>
              <Button
                sx={{
                  borderRadius: "25px",
                  "&:hover": {
                    backgroundColor: "#252b42",
                    borderRadius: "25px",
                    color: "white",
                  },
                }}
                color="inherit"
                component={Link}
                to="/about-us"
              >
                About Us
              </Button>

              <IconButton color="inherit" onClick={() => alert("Go to Cart")}>
                <ShoppingCartIcon />
              </IconButton>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
                onClick={() => alert("Go to Profile")}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "gray",
                    borderRadius: "8%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "1.4rem",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    {
                      // userData?.name && userData?.name.charAt(0).toUpperCase()
                    }
                    AS
                  </Typography>
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <Typography variant="subtitle1">
                    Welcome, {userData?.name}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "0.8rem",
                    }}
                  >
                    Jane
                  </Typography>
                </div>
              </div>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
