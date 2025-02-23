import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="mainHeader">
            <div className="logo">
              <span>Fruitables</span>
            </div>
            <Navbar />
            <div className="icons">
              <SearchIcon className="headerIcon" />
              <ShoppingBagIcon className="headerIcon" />
              <PersonIcon className="headerIcon" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
