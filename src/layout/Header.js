import React from "react";
import "./Header.css";
import menuIcon from "../images/menu-icon.png";
import profile from "../images/profile.png";

export default function Header() {
  return (
    <div className="Header">
      <a href="/gmail">Gmail</a>
      <a href="/images">Images</a>
      <div id="square">
        <img src={menuIcon} alt="menu-icon" />
      </div>
      <div id="profilePic">
        <img src={profile} alt="menu-icon" />
      </div>
    </div>
  );
}
