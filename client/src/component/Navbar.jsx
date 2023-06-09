import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
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
          {currentUser ? (
            <>
              <span>{currentUser.username}</span>
              <span onClick={logout}>Logout</span>
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
