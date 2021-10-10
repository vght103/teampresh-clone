import React from "react";
import Navbar from "../navbar/Navbar";
import "./header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/home">
          <img
            src={process.env.PUBLIC_URL + "/images/home/logo.png"}
            alt="팀프레쉬 로고"
          />
        </Link>
      </h1>

      <Navbar />
    </header>
  );
};

export default Header;
