import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const Category = ["Art", "Food", "Technology", "Design", "Science", "Cinema"];

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">logo</div>
        <div className="links">
          {Category.map((ele) => {
            return (
              <Link className="link" to={`/?category=${ele}`} key={ele}>
                <h6>{ele}</h6>
              </Link>
            );
          })}
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
