import React from "react";
import "./navbar.scss";
import RoofingIcon from "@mui/icons-material/Roofing";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GridViewIcon from "@mui/icons-material/GridView";
import LightModeIcon from "@mui/icons-material/LightMode";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import ZoomOutOutlinedIcon from "@mui/icons-material/ZoomOutOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Navbar = () => {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>The Flat Social</span>
        </Link>
        <RoofingIcon />
        {darkMode ? (
          <DarkModeIcon onClick={toggleDarkMode} />
        ) : (
          <LightModeIcon onClick={toggleDarkMode} />
        )}
        <GridViewIcon />
        <div className="search">
          <ZoomOutOutlinedIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="right">
        <CircleNotificationsIcon />
        <MailOutlineOutlinedIcon />
        <div className="user">
          <img src={currentUser.profilePic} alt="random-pic" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
