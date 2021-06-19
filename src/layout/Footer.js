import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="row country">
        <a href="#">India</a>
      </div>
      <div className="row details">
        <div className="about">
          <a href="#">About</a>
          <a href="#">Advertising</a>
          <a href="#">Bussiness</a>
          <a href="#">How Search Works</a>
        </div>
        <div className="setting">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Settings</a>
        </div>
      </div>
    </div>
  );
}
