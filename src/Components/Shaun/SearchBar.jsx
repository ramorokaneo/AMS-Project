// import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import FilterIcon from "@mui/icons-material/Filter";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const handleFilterIconClick = () => {
    console.log("Filter Button Clicked!!!");
  };

  const handleSearchIconClick = () => {
    console.log("Search Button Clicked!!!");
  };

  return (
    <Box className="search-bar-container">
      <img
        src="images/left_lion.png"
        alt="Shop 1"
        width={200}
        height={150}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      />
      <Box
        className="search-bar-body"
        padding={5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="images/logo2.png" alt="AMS COMPANY" width={80} height={80} />
        <TextField
          id="search-input"
          label="Search"
          value=""
          onChange={(event) => {
            console.log("Search text changed:", event.target.value);
          }}
          style={{
            width: "60%",
            marginBottom: 8,
          }}
        />
        <Box className="icons-container">
          <IconButton onClick={handleFilterIconClick}>
            <FilterIcon />
          </IconButton>
          <IconButton onClick={handleSearchIconClick}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      <img
        src="images/right_lion.png"
        alt="Shop 2"
        width={200}
        height={150}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      />
    </Box>
  );
};

export default SearchBar;
