import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">logo</div>
        <div className="links">
          <Link className="link" to={"/?cat=art"}>
            <h6>ART</h6>
          </Link>
          <Link className="link" to={"/?cat=science"}>
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to={"/?cat=food"}>
            <h6>FOOD</h6>
          </Link>
          <Link className="link" to={"/?cat=technology"}>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to={"/?cat=design"}>
            <h6>DESIGN</h6>
          </Link>
          <span>UserName</span>
          <span>Logout</span>
          <span className="Create-Post">
            <Link to={"/createPost"} className="link">
              NEW
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
