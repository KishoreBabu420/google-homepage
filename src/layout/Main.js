import React from "react";
import "./Main.css";
import google from "../images/google.png";
import { FaSearch } from "react-icons/fa";

export default function Main() {
  return (
    <div className="Main">
      <div className="Wrapper">
        <img id="logo" src={google} height="92" width="272" alt="Google-Logo" />
        <div id="search">
          <FaSearch id="search-icon" />
          <input type="text" />
        </div>
        <div className="btn-container">
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>
        <p>
          Google Offered in:
          <a href="#">हिन्दी</a>
          <a href="#">বাংলা</a>
          <a href="#">తెలుగు</a>
          <a href="#">मराठी</a>
          <a href="#">தமிழ்</a>
          <a href="#">ગુજરાતી</a>
          <a href="#">ಕನ್ನಡ</a>
          <a href="#">മലയാളം</a>
          <a href="#">ਪੰਜਾਬੀ</a>{" "}
        </p>
      </div>
    </div>
  );
}
