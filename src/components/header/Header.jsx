import React from "react";
import { Logo } from "../logo/Logo";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Avatar } from "@mui/material";
import "./header.scss";
import {Share} from "../share/Share";

// export const Header = () => {
 export const Header = ({handleOpen}) => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <Logo />
          {/* <Share/> */}
          <div className="search">
            <SearchIcon className="search-icon"/>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="header-links">
            <a href="/">
              <HomeIcon className="icon" />
            </a>
            <a href="/">
              <MessageIcon className="icon" />
            </a>
           
              
              <AddBoxIcon className="addBoxIcon icon" onClick={handleOpen} />
            
            <a href="/">
              <Avatar
                alt="Remy Sharp"
                src="https://randomuser.me/api/portraits/men/46.jpg "
                sx={{width:28, height:28}}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
