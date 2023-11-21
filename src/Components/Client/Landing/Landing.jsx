import React from "react";
// import SearchBar from "../../Landing/SearchBar";
// import Explore from "../../Shaun/explore";
import SearchBar from "../../Shaun/SearchBar";
import SaveBigHeader from "../../Shaun/SaveBigHeader";
import FollowUs from "../../Global/Header";
import Navbar from "../../Global/Nav";
import Explore from "../../Shaun/explore";
function Landing() {
  return (
    <React.Fragment>
      <FollowUs />
      <Navbar />
      <SearchBar />
      <Explore />
      <SaveBigHeader />
    </React.Fragment>
  );
}

export default Landing;
