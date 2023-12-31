import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import background from "../../Global/images/Reed.jpg";
import logo from "../../Global/images/logo.svg";
import Banner from "../../Global/images/media bg-cover.png";

const BusinessRegistration = () => {
  const [businessName, setBusinessName] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");

  const navigate = useNavigate();

  const handlechange = () => {
    // Assuming you have set up state for each field
    const isFormValid =
      !!businessName &&
      !!selectedRole &&
      !!regNumber &&
      !!location &&
      !!selectedBusinessType &&
      !!selectedIndustry &&
      !!phoneNumber;

    if (isFormValid) {
      navigate("/add-products-and-services");
    } else {
      alert("Please fill in all required fields");
      // or any other way to notify the user about the missing fields
    }
  };

  const emptyOption = [""];

  const roleOptions = [
    ...emptyOption,
    "Graphic Designer",
    "Data Entry Specialist",
    "Project Manager",
    "Software Engineer",
    "Marketing Specialist",
    "Sales Manager",
    "Accountant",
    "HR Manager",
    "Content Writer",
    "Customer Support Specialist",
    "Product Manager",
    "Financial Analyst",
    "UI/UX Designer",
    "Network Administrator",
    "Legal Counsel",
    "Business Analyst",
    "Quality Assurance Engineer",
    "Data Scientist",
    "Operations Manager",
    "Research Scientist",
  ];

  const businessTypeOptions = [
    ...emptyOption,
    "Sole Proprietorship",
    "Partnership",
    "Online Business",
    "Limited Liability Company (LLC)",
    "Corporation",
    "Cooperative",
    "Franchise",
    "Nonprofit Organization",
    "Joint Venture",
    "S Corporation",
    "Trust",
    "Limited Partnership (LP)",
    "General Partnership",
    "Limited Liability Partnership (LLP)",
    "B Corporation",
    "Sole Proprietorship",
    "Freelancer or Independent Contractor",
    "Home-Based Business",
    "Retail Business",
    "E-commerce Business",
  ];

  const industryOptions = [
    ...emptyOption,
    "Technology",
    "Energy",
    "Telecommunications",
    "Healthcare",
    "Finance",
    "Education",
    "Entertainment",
    "Manufacturing",
    "Retail",
    "Transportation",
    "Agriculture",
    "Real Estate",
    "Hospitality",
    "Construction",
    "Automotive",
    "Media",
    "Aerospace",
    "Biotechnology",
    "Pharmaceutical",
    "Fashion",
  ];

  return (
    <>
      <div>
        <div
          className="container"
          style={{
            width: "100vw",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh",
          }}>
          <Grid
            container
            style={{
              width: "100%",
              marginBottom: "-10vh",
            }}>
            <Grid
              item
              lg={8}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
              }}>
              <Grid
                container
                lg={6}
                style={{
                  width: "100vw",
                }}></Grid>
              <Grid
                container
                lg={6}
                style={{
                  width: "100vw",
                  marginBottom: "-8px",
                }}>
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
                backgroundColor: "#fff",
                marginLeft: "-10px",
                width: "100%",
                height: "98vh",
                alignSelf: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
              <Grid>
                <img
                  src={logo}
                  style={{ height: "9vh", width: "90%", paddingTop: "10vh" }}
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
                    marginLeft: "80px",
                    marginBottom: "30px",
                  }}>
                  <h2
                    style={{
                      color: "#000",
                      textAlign: "left",
                      fontSize: "25px",
                    }}>
                    BUSINESS REGISTRATION
                  </h2>
                  <TextField
                    id="outlined-number"
                    label="Business Name"
                    type="text"
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ width: "100%" }}
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                  <br />
                  <TextField
                    id="outlined"
                    select
                    label="Role"
                    variant="standard"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      marginTop: "10px",
                    }}
                    required>
                    {roleOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  <br />

                  <TextField
                    id="outlined-number"
                    label="Reg Number"
                    type="number"
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{
                      width: "100%",
                      marginTop: "10px",
                    }}
                    required
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                  />
                  <TextField
                    id="outlined-number"
                    label="Website"
                    type="text"
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ width: "100%", marginTop: "10px" }}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <TextField
                    id="outlined-number"
                    label="Location"
                    type="text"
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ width: "100%", marginTop: "10px" }}
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Type of business"
                    variant="standard"
                    value={selectedBusinessType}
                    onChange={(e) => setSelectedBusinessType(e.target.value)}
                    style={{
                      width: "48%",
                      marginTop: "5px",
                      marginRight: "10px",
                      textAlign: "left",
                    }}
                    required>
                    {businessTypeOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Industry"
                    variant="standard"
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    style={{
                      width: "48%",
                      marginTop: "5px",
                      textAlign: "left",
                    }}
                    required>
                    {industryOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="outlined-number"
                    label="Phone Number"
                    type="text"
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ width: "100%", marginTop: "10px" }}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <TextField
                    id="outlined-number"
                    label="Bio"
                    type="text"
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ width: "100%", marginTop: "10px" }}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                  {/* Add other TextField components as needed */}
                  <Button
                    variant="contained"
                    style={{
                      width: "80%",
                      height: "10%",
                      margin: "20px 0px",
                      background: "#072840",
                      borderRadius: "30px",
                    }}
                    onClick={handlechange}>
                    Continue
                  </Button>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default BusinessRegistration;
