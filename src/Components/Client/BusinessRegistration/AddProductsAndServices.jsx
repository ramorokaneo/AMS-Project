import { useState } from "react";
import { Grid, TextField, Box, MenuItem, Button } from "@mui/material";
import background from "../../Global/images/Reed.jpg";
import logo from "../../Global/images/logo.svg";
import Banner from "../../Global/images/media bg-cover.png";
import placeholder from "../../Global/images/login.jpg";

const AddProductsAndServices = () => {
  const emptyOption = [""];
  const [images, setImages] = useState([]);

  const productCategory = [
    ...emptyOption,
    "Electronics",
    "Clothing and Apparel",
    "Home and Furniture",
    "Beauty and Personal Care",
    "Sports and Outdoors",
    "Toys and Games",
    "Books and Stationery",
    "Health and Wellness",
    "Automotive",
    "Grocery and Gourmet",
    "Jewelry and Watches",
    "Home Improvement",
    "Pet Supplies",
    "Office Supplies",
    "Music and Instruments",
    "Garden and Outdoor Living",
    "Art and Craft Supplies",
    "Travel and Luggage",
    "Baby and Maternity",
    "Electrical and Lighting",
  ];

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const newImages = Array.from(files).map((file) => ({
        url: URL.createObjectURL(file),
        file,
      }));
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
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
      <Grid
        container
        style={{
          width: "100%",
          marginBottom: "-10vh",
          //   border: "1px solid green",
        }}>
        <Grid
          item
          lg={8}
          style={{
            // border: "1px solid",
            // backgroundColor: "blue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}>
          <Grid
            Container
            lg={6}
            style={{
              //   backgroudColor: "blue",
              width: "100vw",
              //   border: "1px solid yellow",
            }}></Grid>
          <Grid
            Container
            lg={6}
            style={{
              //   backgroudColor: "yellow",
              width: "100vw",
              //   border: "1px solid yellow",
              marginBottom: "-8px",
            }}>
            {/* <h2>helow world</h2> */}
            <img
              src={Banner}
              style={{
                height: "21vh",
                width: "65vw",
                paddingTop: "30vh",
                marginLeft: "10px",
                marginRight: "2px",
              }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          lg={4}
          style={{
            // border: "1px solid red",
            backgroundColor: "#fff",
            marginLeft: "-10px",
            width: "100%",
            height: "98vh",
            // marginLeft: "2px",
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
          <Grid>
            <img
              src={logo}
              style={{ height: "9vh", width: "90%", paddingTop: "15vh" }}
            />
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
                alignItems: "center",
                width: "75%",
                // backgroundColor: "red",
                marginLeft: "80px",
                marginBottom: "30px",
              }}>
              <h2
                style={{ color: "#000", textAlign: "left", fontSize: "25px" }}>
                ADD PRODUCTS + SERVICES
              </h2>
              {/* <h6>inputs will be stored here</h6> */}
              <div
                className="uploadContainer"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}>
                {images.length > 0 ? (
                  images.map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt={`Product Image ${index + 1}`}
                      style={{
                        padding: "10px",
                        marginRight: "10px",
                        width: "16%",
                        height: "8vh",
                      }}
                    />
                  ))
                ) : (
                  <img
                    src={placeholder}
                    alt="Placeholder"
                    style={{
                      padding: "5px",
                      marginRight: "10px",
                      width: "16%",
                      height: "8vh",
                    }}
                  />
                )}
                <label
                  htmlFor="imageInput"
                  className="add"
                  style={{
                    backgroundColor: "whitesmoke",
                    color: "#000",
                    padding: "20px",
                    width: "10%",
                  }}>
                  +
                </label>
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                  multiple // Allow selecting multiple files
                />
              </div>
              <TextField
                id="outlined-number"
                label="Name"
                type="text"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: "100%" }}
              />
              <TextField
                id="outlined-number"
                label="Business Name"
                type="text"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: "100%", marginTop: "10px" }}
              />
              <TextField
                id="outlined-number"
                label="Price"
                type="text"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: "48%", marginRight: "10px", marginTop: "10px" }}
              />
              <TextField
                id="outlined-number"
                label="Quantity"
                type="text"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: "48%", marginTop: "10px" }}
              />
              <br />
              <TextField
                id="outlined-number"
                label="Description"
                type="text"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{
                  //   backgroundColor: "dodgerblue",
                  width: "100%",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="product Category"
                variant="standard"
                // value={selectedProductCategory}
                // onChange={(e) => setSelectedBusinessType(e.target.value)}
                style={{
                  width: "100%",
                  // marginTop: "5px",
                  marginRight: "10px",
                  textAlign: "left",
                }}>
                {productCategory.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="outlined-number"
                label="Brand"
                type="text"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: "100%", marginLeft: "5px", marginTop: "10px" }}
              />
              <Button
                variant="contained"
                style={{
                  width: "80%",
                  height: "10%",
                  //   padding: "15px",
                  margin: "20px 0px",
                  background: "#072840",
                  borderRadius: "30px",
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

export default AddProductsAndServices;
