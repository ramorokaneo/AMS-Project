import { Box, TextField, IconButton } from "@mui/material";

const SearchBar = () => {
  const handleFilterIconClick = () => {
    console.log("Filter Button Clicked!!!");
  };

  const handleSearchIconClick = () => {
    console.log("Search Button Clicked!!!");
  };

  return (
    <Box
      className="search-bar-container"
      size="100%"
      sx={{
        width: " 100%",
        height: "13rem",
        backgroundColor: "#070f18",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src="images/left_lion.png"
        alt="Shop 1"
        width={250}
        height={205}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      />
      <Box
        className="search-bar-body"
        // padding={0}
        sx={{
          // backgroundColor: "red",
          width: "40vw",
          height: "13rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="images/logo2.png"
          alt="AMS COMPANY"
          style={{
            // marginTop: "1px",
            marginTop: 20,
            height: "50px",
            color: "white",
            marginBottom: "50px",
          }}
        />
        <Box
          style={{
            padding: "10px",
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            height: "60px",
          }}
        >
          <TextField
            id="search-input"
            label="Search..."
            value=""
            onChange={(event) => {
              console.log("Search text changed:", event.target.value);
            }}
            sx={{
              marginBottom: 8,
              fontSize: "16px",
              width: "80%",
              height: "30px",
            }}
            hiddenLabel
            defaultValue="Small"
            size="small"
            variant="standard"
          />
          <Box
            className="icons-container"
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <IconButton onClick={handleFilterIconClick}>
              <img src="/icons/filter.svg" alt="img filter" />
            </IconButton>
            <IconButton onClick={handleSearchIconClick}>
              <img src="/icons/search-status.svg" alt="img search" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <img
        src="images/right_lion.png"
        alt="Shop 2"
        width={250}
        height={205}
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
