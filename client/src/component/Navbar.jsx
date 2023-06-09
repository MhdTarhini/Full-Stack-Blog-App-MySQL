import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  const Category = ["Art", "Food", "Technology", "Design", "Science", "Cinema"];
  const location = useLocation();
  const isHomePage = location.pathname === "/" && location.search === "";

  return (
    <div className="navbar">
      <div className="container">
        <Link to={"/"} className="link">
          <div className="logo">logo</div>
        </Link>
        <div className="links">
          {Category.map((ele) => {
            return (
              <Link className="link" to={`/?category=${ele}`} key={ele}>
                <h6>{ele}</h6>
              </Link>
            );
          })}
          {currentUser ? (
            <>
              {isHomePage && (
                <>
                  <span>{currentUser.username}</span>
                  <span onClick={logout}>Logout</span>
                </>
              )}
              <span className="Create-Post">
                <Link to={"/createPost"} className="link">
                  NEW
                </Link>
              </span>
            </>
          ) : (
            <>
              <Link className="link" to="/login">
                Login
              </Link>
              <Link className="link" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
